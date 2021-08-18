import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalWindowModule } from 'src/app/modal-window/modal-window-module';

import { HeaderModule } from '../header/header.module';
import { WishListComponent } from './Components/wish-list.component';

import { WishListRoutingModule } from './wish-list-routing.module';


@NgModule({
  declarations: [WishListComponent],
  imports: [
    CommonModule,
    HeaderModule,
    ModalWindowModule,
    WishListRoutingModule,
  ],
  exports: [],
})
export class WishListModule { }
