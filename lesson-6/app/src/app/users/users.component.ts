import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { LoggerService } from "../shared/services/logger/logger.service";
import { UsersService } from "../shared/services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  constructor() { }
}
