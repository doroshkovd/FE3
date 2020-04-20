import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { FormsModule } from "@angular/forms";
import { UsersComponent } from "./users/users.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from "./services/auth/auth.guard";
import { ServersGuard } from "./services/servers/servers.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent,
    ServersComponent,
    UserComponent,
    UsersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
