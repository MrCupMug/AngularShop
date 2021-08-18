import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
     {
       path: '',
       loadChildren: () => import('./products/products-module').then((m) => m.ProductsModule),
      },
     {path: 'wish-list', loadChildren: () => import('./wish-list/index')
      .then((m) => m.WishListModule)},
     {path: 'basket', loadChildren: () => import('./basket/index')
      .then((m) => m.BasketModule)},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
