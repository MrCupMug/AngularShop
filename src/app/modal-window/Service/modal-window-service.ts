import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalWindowService {

    public phone: any = new BehaviorSubject<object | null>(null);

    public isSwitched = new BehaviorSubject<boolean>(false);

    public isCardComponent = false;

    constructor() { }

    public phoneUpdate(id: number, phone: any): void {
        this.phone.next({id, title: phone.title, price: phone.price, amount: phone.amount});
    }

    public modalSwitchTrue(): void {
        this.isSwitched.next(true);
    }

    public modalSwitchFalse(): void {
        this.isSwitched.next(false);
    }

}