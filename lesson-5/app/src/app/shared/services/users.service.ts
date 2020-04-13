import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _activeUsers = ['Max', 'Anna'];
  private _inactiveUsers = ['Chris', 'Manu'];

  get activeUsers() {
    return this._activeUsers
  }

  get inactiveUsers() {
    return this._inactiveUsers
  }

  constructor() { }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
