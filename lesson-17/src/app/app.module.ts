import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfomanceComponent } from "./perfomance/perfomance.component";
import { EmployeeListModule } from "./perfomance/employee-list/employee-list.module";
import { ZoneComponent } from "./zone/zone.component";
import { Change1Component } from "./change/change-1.component";
import { Change2Component } from "./change/change-2.component";
import { Change3Component } from "./change/change-3.component";
import { Change4Component } from "./change/change-4.component";

@NgModule({
  declarations: [
    AppComponent,
    PerfomanceComponent,
    ZoneComponent,
    Change1Component,
    Change2Component,
    Change3Component,
    Change4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
