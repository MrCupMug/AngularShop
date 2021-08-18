import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from '../header//header.module';

import { BasketComponent } from './Components/basket.component';
import { BasketRoutingModule } from './basket-routing.module';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FormsModule,
    BasketRoutingModule,
  ],
  exports: [],
})
export class BasketModule { }
