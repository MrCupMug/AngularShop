import { Injectable } from '@angular/core';

import { ICardProduct } from '../../Interfaces/card-product.interface';

@Injectable({
  providedIn: 'root',
})
export class CardListService {

  public cards: ICardProduct[] = [
  {title: 'YotaPhone', price: 45000, imgUrl: '../assets/phone.jpeg'},
  {title: 'Iphone', price: 23000, imgUrl: '../assets/phone.jpeg'},
  {title: 'YotaPhone', price: 124000, imgUrl: '../assets/phone.jpeg'},
  {title: 'YotaPhone', price: 52000, imgUrl: '../assets/phone.jpeg'},
  {title: 'Iphone', price: 46000, imgUrl: '../assets/phone.jpeg'},
  {title: 'Samsung', price: 78000, imgUrl: '../assets/phone.jpeg'},
  {title: 'Iphone', price: 64000, imgUrl: '../assets/phone.jpeg'},
  {title: 'YotaPhone', price: 150000, imgUrl: '../assets/phone.jpeg'},
  {title: 'Samsung', price: 17000, imgUrl: '../assets/phone.jpeg'},
  {title: 'Samsung', price: 30000, imgUrl: '../assets/phone.jpeg'},
  {title: 'YotaPhone', price: 87000, imgUrl: '../assets/phone.jpeg'},
  ];

  constructor() { }

  public getCards(): ICardProduct[] {
    return this.cards;
  }

  public getFilteredCards(min: number, max: number, select: any): ICardProduct[] {

    if (select !== 'Any') {
      return this.cards
        .filter((card) => card.price >= min && card.price <= max && card.title === select);
    } else {
      return this.cards.filter((card) => card.price >= min && card.price <= max);
    }

  }

}
