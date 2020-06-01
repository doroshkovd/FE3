import { Action } from "@ngrx/store";
import { LoginUser } from "../user";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: LoginUser) {
    console.log(LOGIN);
  }
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;

  constructor() {
    console.log(LOGOUT);
  }
}

export type AuthActions = LogoutAction | LoginAction;
