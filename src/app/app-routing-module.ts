
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Product } from './features/products/components/product/product';
import { Welcome } from './features/home/welcome/welcome';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Welcome },
  { path: 'products', component: Product },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
