import { LoginUser } from "../user";
import { Action } from "@ngrx/store";
import { AuthActions } from "./auth.actions";

export interface AuthState {
  user: LoginUser;
}

export const  initialAuthState: AuthState = {
  user: null,
};

export function authReducer(state: AuthState = initialAuthState, action: AuthActions) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

      case "LOGOUT":
        return {
          ...state,
          user: null,
        };
    default:
      return state;
  }
}
