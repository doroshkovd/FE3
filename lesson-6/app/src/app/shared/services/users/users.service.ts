import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { BehaviorSubject } from "rxjs";
import { LoggerService } from "../logger/logger.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = [
    {name: 'User1', email: 'user1@google.com', role: 'user' },
    {name: 'User2', email: 'user2@google.com', role: 'user' },
    {name: 'User3', email: 'user3@google.com', role: 'user' },
    {name: 'Admin', email: 'admin@google.com', role: 'admin' },
  ];
  private usersSubject = new BehaviorSubject<User[]>([...this._users]);

  constructor(private logger: LoggerService) { }

  getUsers() {
    return this.usersSubject;
  }

  addUsers(user: User): void {
    this._users.push(user);
    this.logger.log(`${user.name} was added`);
    this.usersSubject.next([...this._users]);
  }

  setUserAsAdmin(email: string): void {
    this._users.forEach((user: User, index: number) => {
      if (user.email === email) {
        user.role = 'admin';
      }
    });
    this.logger.log(`User:${email} is Admin`);
    this.usersSubject.next([...this._users]);
  }
}
