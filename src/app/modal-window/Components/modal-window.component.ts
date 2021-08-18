import { Component, OnInit, Input } from '@angular/core';

import { IBasketProduct } from 'src/app/basket/Interfaces/basket-product.interface';

import { BasketService } from '../../basket/Services/basket.service';
import { HeaderService } from '../../header/Service/header.service';
import { WishListService } from '../../wish-list/Service/wish-list.service';
import { ModalWindowService } from '../Service/modal-window-service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnInit {

  public isSwitched: boolean | undefined;

  public productCounter = 1;

  public phone!: IBasketProduct;

  constructor(
    private readonly _modalService: ModalWindowService,
    private readonly _basketService: BasketService,
    private readonly _headerService: HeaderService,
    private readonly _wishService: WishListService,
  ) { }

  public ngOnInit(): void {
    this._modalService.isSwitched.subscribe((v) => this.isSwitched = v);
    this._modalService.phone.subscribe((phone: any) => this.phone = phone);
  }

  public hideModal(): void {
    this._modalService.modalSwitchFalse();
    this.productCounter = 1;
  }

  // Increment of product amount
  public counterPlus(): void {
    this.productCounter++;
  }

  // Decrement of product amount
  public counterMinus(): void {
    if (this.productCounter === 1) { return; }
    this.productCounter--;
  }

  public addToBasket(): void {
    this._basketService.updateBasketProds(this.phone, this.productCounter);

    this._modalService.modalSwitchFalse();
    this.productCounter = 1;

    this._basketService.totalBasketSum += this.phone.price * this._basketService.map.get(this.phone.id);
    this._headerService.setTotalPrice(this._basketService.totalBasketSum);

    this._basketService.setTotalAmount();

    this._wishService.deleteprods(this.phone.id);
    this._wishService.prods.filter((item) => item.id > -1);

    if (!this._modalService.isCardComponent) {
      this._headerService.counterDecr();
    } else {
      this._basketService.counterBasketIds.push(this.phone.id);
    }
  }

}
