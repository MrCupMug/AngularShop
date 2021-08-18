import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { ICardProduct } from '../../Interfaces/card-product.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() public product!: ICardProduct;

  public isCardComonent = true;

  @Output() private readonly selectedProduct = new EventEmitter();
  @Output() private readonly wishProduct = new EventEmitter();

  constructor() { }

public ngOnInit(): void { }

  public selectBasketProduct(phone: ICardProduct): void {

    this.selectedProduct.emit(phone);

  }

  public selectWishProduct(phone: ICardProduct): void {

    this.wishProduct.emit(phone);

  }

}
