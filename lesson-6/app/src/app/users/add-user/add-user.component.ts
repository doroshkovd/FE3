import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from "../../shared/models/user.model";
import { LoggerService } from "../../shared/services/logger/logger.service";
import { UsersService } from "../../shared/services/users/users.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    role: 'user',
  };

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  onAddUser() {
    this.usersService.addUsers(this.user);
    this.user = { name: '', email: '', role: 'user' };
  }

}
