import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { HomeComponent }               from './home/home.component';
import { AuthComponent }              from './auth/auth.component';
import {AuthGuard} from "./auth/auth.guard";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailsComponent} from "./products/product-details.component";
import {LocationsComponent} from "./locations/locations.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
    { path: 'products/:id/details', component: ProductDetailsComponent, canActivate: [AuthGuard] },
    { path: 'auth', component: AuthComponent }
];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);