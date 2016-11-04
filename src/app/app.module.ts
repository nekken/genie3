import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

import { routing, appRoutingProviders } from './app.routes';
import { NavbarComponent } from './navbar.component';
import {Auth} from "./auth/auth.service";
import { SidebarComponent } from './sidebar.component';
import {AppLayout} from "./app.layout";
import { ProductsComponent } from './products/products.component';
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {ProductsService} from "./products/products.service";
import { ProductDetailsComponent } from './products/product-details.component';
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";
import { ProductEditPopupComponent } from './products/product-edit-popup.component';
import { SpinnerComponent } from './spinner.component';
import { LocationsComponent } from './locations/locations.component';
import {LocationsService} from "./locations/locations.service";
import {InMemService} from "./data";
import { LocationEditPopupComponent } from './locations/location-edit-popup.component';
import { LocationDeletePopupComponent } from './locations/location-delete-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductEditPopupComponent,
    SpinnerComponent,
    LocationsComponent,
    LocationEditPopupComponent,
    LocationDeletePopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemService, { delay: 100 }),
    SlimLoadingBarModule.forRoot()

  ],
  providers: [
    AppLayout,
    ProductsService,
    LocationsService,
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
