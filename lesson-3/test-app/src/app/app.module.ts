import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from "./test/test.component";
import { Test2Component } from './test2/test2.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from "@angular/forms";
import { NoContentComponent } from './todo-list/no-content/no-content.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    WarningComponent,
    SuccessComponent,
    TodoListComponent,
    NoContentComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
