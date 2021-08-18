import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IBasketProduct } from '../Interfaces/basket-product.interface';

@Injectable({
  providedIn: 'root',
})
export class BasketService {

  // User data for forms

  public objectValues: any = { };

  public userData: object = {

    name: undefined,
    surname: undefined,
    patronymic: undefined,

    number: undefined,
    email: undefined,

    address: undefined,

    comment: undefined,

    products: this.objectValues,
  };

  // Map for storing amount of products in basket
  public map = new Map();

  public totalBasketSum = 0;

  // Array of products in basket. Adding and removing
  public basketProds: IBasketProduct[] = [
    {id: -2, title: 'unnecessary', price: 1, amount: 3},
  ];

  // Array for cards not to repeat in basket
  public counterBasketIds: number[] = [];

  public amountSubject = new BehaviorSubject<number>(0);


  constructor() { }

  public updateBasketProds(phone: IBasketProduct, amount: number): void {
    this.basketProds
      .push({id: phone.id, title: phone.title, price: phone.price, amount}, );

    this.map.set(phone.id, amount);
  }

  public deleteBasketProds(id: number): void {
    this.basketProds = this.basketProds.filter((item) => item.id !== id);
  }

  public deleteCounterBasketIds(id: number): void {
    delete this.counterBasketIds[this.counterBasketIds.indexOf(id)];
  }

  public setTotalAmount(): void {
    this.amountSubject.next(this.mapSum());
  }

  public getUserData(): object {
    return this.userData;
  }

  private mapSum(): number {
    let ValuesSum = 0;
    for (const value of this.map.values()) {
      ValuesSum += value;
    }

    return ValuesSum;
  }

}
