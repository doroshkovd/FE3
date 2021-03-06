import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged = false;

  get isLogged() {
    return this._isLogged;
  }

  constructor() { }

  login() {
    this._isLogged = true;
  }

  logout() {
    this._isLogged = false;
  }

}
