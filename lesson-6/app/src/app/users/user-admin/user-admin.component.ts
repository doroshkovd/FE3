import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggerService } from "../../shared/services/logger/logger.service";
import { UsersService } from "../../shared/services/users/users.service";

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss'],
})
export class UserAdminComponent implements OnInit {
  constructor(
    private usersService: UsersService,
  ) {
  }

  email: string;

  ngOnInit(): void {

  }

  onSetAdmin() {
    this.usersService.setUserAsAdmin(this.email);
    this.email = '';
  }

}
