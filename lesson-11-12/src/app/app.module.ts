import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ErrorsComponent } from "./shared/errors/errors.component";
import { LogInterceptor } from "./shared/interceptors/log.interceptor";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import { TimestampInterceptor } from "./shared/interceptors/timestamp.interceptor";
import { ErrorInterceptor } from "./shared/interceptors/error.interceptor";
import { AppInterceptors } from "./shared/interceptors/app-interceptors";

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppInterceptors.interceptors,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
