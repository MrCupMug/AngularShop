import { Component, OnInit, Input, } from '@angular/core';

import { ModalWindowService } from '../../modal-window/Service/modal-window-service';
import { BasketService } from '../../basket/Services/basket.service';
import { WishListService } from '../Service/wish-list.service';
import { HeaderService } from '../../header/Service/header.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {

  public wishListProduct: any | undefined;

  public isCardComponent = false;

  constructor(
    private readonly _basketSevice: BasketService,
              private readonly _wishService: WishListService,
              private readonly _headerService: HeaderService,
              private readonly _modalService: ModalWindowService,
  ) { }

  public ngOnInit(): void {
    this._wishService.wishProds.subscribe((v) => this.wishListProduct = v);
   }

  // Showing modal window
  public showModal(phone: any): void {

    this._modalService.modalSwitchTrue();
    this._modalService.phoneUpdate(phone.id, phone);

    this._modalService.isCardComponent = this.isCardComponent;

  }

  // Hiding modal window
  public hideModal(): void {
    this._modalService.modalSwitchFalse();
  }

  // Function for deleting cards from wish-list
  public deleteprods(elem: any): void {
    this._wishService.deleteprods(elem.id);
    this.wishListProduct = this._wishService.prods.filter((item) => item.id > -1);
    this._headerService.counterDecr();
    this._wishService.deleteCounterIds(elem.id);

    this._basketSevice.deleteCounterBasketIds(elem.id);

  }

  // Setting values in header (BehaviorSubject)
  public sendMessage(): void {
    this._headerService.setTotalPrice(this._basketSevice.totalBasketSum);
    this._basketSevice.setTotalAmount();
  }

}
