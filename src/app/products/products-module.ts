import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalWindowModule } from '../modal-window/modal-window-module';
import { CardModule } from '.';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './Components/products/products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalWindowModule,
    CardModule,
    ProductsRoutingModule,
  ],
  exports: [ProductsComponent],
})
export class ProductsModule { }
