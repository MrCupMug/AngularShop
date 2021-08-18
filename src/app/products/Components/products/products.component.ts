import { Component, OnInit } from '@angular/core';

import { WishListService } from 'src/app/wish-list/Service/wish-list.service';
import { HeaderService } from 'src/app/header/Service/header.service';
import { ModalWindowService } from 'src/app/modal-window/Service/modal-window-service';

import { BasketService } from '../../../basket/Services/basket.service';
import { ICardProduct } from '../../Interfaces/card-product.interface';
import { CardListService } from '../Service/card-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  public smartphones: ICardProduct[] = this._cardsService.getCards();

  public isFilterSwitched = false;

  public minValue = 23000;
  public maxValue = 150000;

  private readonly isCardComponent = true;

  private readonly basketIds: number[] = this._basketService.counterBasketIds;

  private readonly wishListIds: number[] = this._wishService.counterIds;

  constructor(private readonly _cardsService: CardListService,
              private readonly _modalService: ModalWindowService,
              private readonly _basketService: BasketService,
              private readonly _wishService: WishListService,
              private readonly _headerService: HeaderService, ) { }

  public ngOnInit(): void { }

  public showModal(phone: ICardProduct, id: number): void {

    this.isFilterSwitched = false;

    if (this.basketIds.indexOf(id) !== -1) {
      return;
    }

    this._modalService.modalSwitchTrue();
    this._modalService.phoneUpdate(id, phone);

    this._modalService.isCardComponent = this.isCardComponent;

  }

  public addToWishList(phone: ICardProduct, id: number): void {

    if (this.basketIds.indexOf(id) !== -1) { return; }

    this._wishService.updateprods(id, phone.title, phone.price,
    new Date()
      .toLocaleTimeString()
        .slice(0, -3));

    this._headerService.counterIncr();
    this.wishListIds.push(id);
    this._basketService.counterBasketIds.push(id);

  }

  public showFilterModal(): void {
    this.isFilterSwitched = !this.isFilterSwitched;
  }

  public isNumberCheck(event: any): boolean {

    const ASCIICode = event.charCode;

    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        return false;
    }

    return true;
  }

  public submitChanges(minAmount: any, maxAmount: any, select: any): void {

    this.isFilterSwitched = !this.isFilterSwitched;

    this.minValue = minAmount;
    this.maxValue = maxAmount;

    this.smartphones = this._cardsService.getFilteredCards(minAmount, maxAmount, select);
  }

  public resetFilter(): void {

    this.isFilterSwitched = !this.isFilterSwitched;

    this.smartphones = this._cardsService.getCards();

    this.minValue = 23000;
    this.maxValue = 150000;
  }

}
