import { Component, OnInit } from '@angular/core';

import { BasketService } from '../Services/basket.service';
import { WishListService } from '../../wish-list/Service/wish-list.service';
import { HeaderService } from '../../header/Service/header.service';
import { IBasketProduct } from '../Interfaces/basket-product.interface';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {

  public basketGoods: IBasketProduct[] = this._basketService.basketProds
    .filter((item) => item.id > -1);

  public submit = false;

  public userData: any = this._basketService.getUserData();

  // Array of products in basket
  public basketProducts: IBasketProduct[] = this._basketService.basketProds
    .filter((item) => item.id > -1);

  public map: any = this._basketService.map;

  public tempValue = 0;

  constructor(
    private readonly _basketService: BasketService,
    private readonly _wishService: WishListService,
    private readonly _headerService: HeaderService,
              ) { }

  public ngOnInit(): void {}

  // Forms submitting button
  public onSubmitted(): void {
    this.setValues();
    this.submit = true;
  }

  // Function for wish-list managing
  public moveToWishList(pBasket: IBasketProduct): void {

    const totalSum: number = pBasket.price * this._basketService.map.get(pBasket.id);

    this._basketService.deleteBasketProds(pBasket.id);
    this.basketProducts = this._basketService.basketProds
      .filter((item) => item.id > -1);

    this._basketService.map.delete(pBasket.id);

    this._wishService.updateprods
    (pBasket.id, pBasket.title, pBasket.price,
      new Date()
        .toLocaleTimeString()
          .slice(0, -3));

    this._headerService.counterIncr();

    this._basketService.totalBasketSum -= totalSum;
    this.sendMessage();
  }

  // Increment of product's amount
  public counterPlus(pBasket: IBasketProduct): void {

    this.tempValue = this._basketService.map.get(pBasket.id);

    this._basketService.map.set(pBasket.id, this.tempValue += 1);

    this._basketService.totalBasketSum += pBasket.price;

    this.sendMessage();
  }

  // Decrement of product amount
  public counterMinus(pBasket: IBasketProduct): void {

    this.tempValue = this._basketService.map.get(pBasket.id);
    if (this.tempValue === 1) { return; }

    this._basketService.map.set(pBasket.id, this.tempValue -= 1);

    this._basketService.totalBasketSum -= pBasket.price;

    this.sendMessage();
  }

  // Function for removing product from basket
  public deleteFromBasket(pBasket: IBasketProduct): void {

    const totalSum: number =  pBasket.price * this._basketService.map.get(pBasket.id);

    this._basketService.deleteBasketProds(pBasket.id);
    this.basketProducts = this._basketService.basketProds.filter((item) => item.id > -1);

    this._basketService.map.delete(pBasket.id);
    this._basketService.deleteCounterBasketIds(pBasket.id);

    this._basketService.totalBasketSum -= totalSum;

    this.sendMessage();
  }

  // Header values (BehaviorSubject)
  private sendMessage(): void {
    this._headerService.setTotalPrice(this._basketService.totalBasketSum);
    this._basketService.setTotalAmount();
  }

  // Setting values for sending in forms
  private setValues(): void {
    this.basketGoods = this._basketService.basketProds.filter((item) => item.id > -1);
    for (const product of this.basketGoods) {
       const amount = this._basketService.map.get(product.id);
       this._basketService.objectValues[product.id] = [product.title, `amount: ${product.amount}, total price: ${product.price * amount}`];
     }
  }


}
