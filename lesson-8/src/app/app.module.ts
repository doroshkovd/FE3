import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ReversePipe } from './shared/reverse.pipe';
import { DotPipe } from "./shared/dot.pipe";
import { FilterPipe } from "./shared/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    DotPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
