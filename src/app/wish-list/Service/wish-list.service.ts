import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IWishListCard } from '../Interfaces/wish-list-card.interface';

@Injectable({
  providedIn: 'root',
})
export class WishListService {

  // Array for cards not to repeat in wish-list
  public counterIds: number[] = [];

  // Array of products in wish-list and drop-list. Also methods for manipulating it
      public prods: IWishListCard[] = [
        {id: -2, title: 'unnecessary', price: 1, imgUrl: '../assets/phone.jpeg', date: '11'},
     ];

  public wishProds = new BehaviorSubject<object[]>(this.prods
    .filter((item) => item.id > -1).reverse().slice(0, 5));

  constructor() { }

  deleteCounterIds(id: number) {
    delete this.counterIds[this.counterIds.indexOf(id)];
  }

  updateprods(id: number, title: string, price: number, date: string) {
    this.prods
    .push({id, title, price, imgUrl: '../assets/phone.jpeg', date}, );

    this.wishProds.next(this.prods.
      filter((item) => item.id > -1)
        .reverse().slice(0, 5));
  }

  deleteprods(id: number) {
    this.prods = this.prods
      .filter((item) => item.id !== id);

    this.wishProds.next(this.prods
      .filter((item) => item.id > -1)
        .reverse().slice(0, 5));
  }

}
