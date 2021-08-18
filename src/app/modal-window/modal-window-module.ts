import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalWindowComponent } from './Components/modal-window.component';


@NgModule({
  declarations: [ModalWindowComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ModalWindowComponent],
})

export class ModalWindowModule { }
