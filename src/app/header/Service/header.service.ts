import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  // Counter of goods in header and methods for manipulating it
  public counterProds = 0;

  public counterProdsSubject = new BehaviorSubject<number>(this.counterProds);

  public priceSubject = new BehaviorSubject<number>(0);

  constructor() { }

  public counterIncr(): void {
    this.counterProdsSubject.next(this.counterProds += 1);
  }

  public counterDecr(): void {
    this.counterProdsSubject.next(this.counterProds -= 1);
  }

  public setTotalPrice(message: number): void {
    this.priceSubject.next(message);
  }

}
