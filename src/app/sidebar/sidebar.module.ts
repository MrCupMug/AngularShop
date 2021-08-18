import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar.component';
import { SidebarDirective } from './directives/sidebar.directive';


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    SidebarDirective,
  ],
})
export class SidebarModule { }
