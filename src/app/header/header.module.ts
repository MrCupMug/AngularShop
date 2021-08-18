import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarDirective } from '../sidebar/directives/sidebar.directive';
import { SidebarModule } from '../sidebar/sidebar.module';

import { HeaderComponent } from './Components/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SidebarModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule { }
