import { Action } from "@ngrx/store";
import { LoginUser } from "../user";

export const LOGIN_START = '[Auth] LOGIN_START';
export const LOGIN_SUCCESS = '[Auth] LOGIN_SUCCESS';
export const LOGIN_FAILED = '[Auth] LOGIN_FAILED';
export const LOGOUT_START = '[Auth] LOGOUT_START';
export const LOGOUT_END = '[Auth] LOGOUT_END';



export  class LoginStartAction implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email: string, password: string}){
    console.log('Start login action')
  }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: LoginUser) {
    console.log('Success login action')

  }
}

export class LoginFailedAction implements Action {
  readonly type = LOGIN_FAILED;
  constructor(public payload: any) {}
}

export class LogoutStartAction implements Action {
  readonly type = LOGOUT_START;
  constructor() {
  }
}

export class LogoutEndAction implements Action {
  readonly type = LOGOUT_END;
  constructor() {
  }
}

export type AuthActions =
  LogoutStartAction |
  LoginSuccessAction |
  LoginFailedAction |
  LoginStartAction |
  LogoutEndAction;
