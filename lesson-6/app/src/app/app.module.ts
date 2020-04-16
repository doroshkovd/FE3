import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserAdminComponent } from './users/user-admin/user-admin.component';
import { FormsModule } from "@angular/forms";
import { LoggerService } from "./shared/services/logger/logger.service";
import { BetterLoggerService } from "./shared/services/better-logger.service";
import { CONFIG, TOKEN } from "./shared/token";


// const logger = {
//   log: (msg) => {
//     console.log(msg);
//   },
//   dir: (msg) => {
//     console.dir(msg);
//   }
// };
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    AddUserComponent,
    UserAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    LoggerService,
    { provide: TOKEN, useValue: CONFIG }
    // { provide: LoggerService, useClass: BetterLoggerService },
    // { provide: LoggerService, useValue: logger as BetterLoggerService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
