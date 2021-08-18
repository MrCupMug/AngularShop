import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WishListComponent } from './Components/wish-list.component';

 const routes: Routes = [
   {path: '', component: WishListComponent},
 ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class WishListRoutingModule { }
