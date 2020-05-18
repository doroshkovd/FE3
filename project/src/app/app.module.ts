import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { CarsComponent } from './cars/cars.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarItemComponent } from './cars/car-list/car-item/car-item.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { NoCarsComponent } from './cars/no-cars/no-cars.component';
import { AddEditCarComponent } from './cars/add-edit-car/add-edit-car.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthComponent } from "./auth/auth.component";
import { ErrorsComponent } from "./shared/errors/errors.component";
import { ErrorInterceptor } from "./shared/errors/error.interceptor";
import { LoaderComponent } from "./shared/loader/loader.component";
import { LoaderInterceptor } from "./shared/loader/loader.interceptor";
import { AuthInterceptor } from "./shared/services/auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    ShoppingListComponent,
    CarDetailComponent,
    CarListComponent,
    CarItemComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    NoCarsComponent,
    AddEditCarComponent,
    AuthComponent,
    ErrorsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
