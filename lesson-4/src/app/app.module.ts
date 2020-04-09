import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { SuccessComponent } from './success/success.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from "@angular/forms";
import { NoContentComponent } from './todo-list/no-content/no-content.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { ServersComponent } from './servers/servers.component';
import { ServerFormComponent } from './server-form/server-form.component';
import { ServerListComponent } from './server-list/server-list.component';
import { ServerListItemComponent } from './server-list/server-list-item/server-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    SuccessComponent,
    TodoListComponent,
    NoContentComponent,
    TodoListItemComponent,
    ServersComponent,
    ServerFormComponent,
    ServerListComponent,
    ServerListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
