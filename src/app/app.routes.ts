import { Routes } from "@angular/router";

import { Product } from "./features/products/components/product/product";
import {Welcome} from "./features/home/welcome/welcome"
import { PageNotFound } from "./features/not-found/page-not-found/page-not-found";

export const routes: Routes = [
    {path: 'home', component: Welcome},
    {path: 'products', component: Product},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFound}
];