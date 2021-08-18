import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { BasketService } from '../../basket/Services/basket.service';
import { WishListService } from '../../wish-list/Service/wish-list.service';
import { HeaderService } from '../Service/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public isSideBarShown = false;

  // Values in header
  public totalPrice: number | undefined;
  public totalAmount: number | undefined;

  public goodsInDropList: any | undefined;
  public goodsInWishList: number | undefined;

  // For showing/hiding drop-list
  public dropListSwitcher = false;

  constructor(private readonly _basketService: BasketService,
              private readonly _wishService: WishListService,
              private readonly _headerService: HeaderService) { }

  public ngOnInit(): void {
    this._headerService.priceSubject
      .subscribe((price) => this.totalPrice = price);
    this._basketService.amountSubject
      .subscribe((amount) => this.totalAmount = amount);

    this._headerService.counterProdsSubject.subscribe((counter) => this.goodsInWishList = counter);
    this._wishService.wishProds.subscribe((obj) => this.goodsInDropList = obj);
   }

  public showSideBar(): void {
    this.isSideBarShown = true;
   }

   public hideSideBar(): void {
     this.isSideBarShown = false;
   }


}
