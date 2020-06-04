import { LoginUser } from "../user";
import { AuthActions, LOGIN_SUCCESS, LOGOUT_END } from "./auth.actions";

export interface AuthState {
  user: LoginUser;
}

export const  initialAuthState: AuthState = {
  user: null,
};

export function authReducer(state: AuthState = initialAuthState, action: AuthActions) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('Reducer login success action')
      return {
        ...state,
        user: action.payload,
      };

      case LOGOUT_END:
        return {
          ...state,
          user: null,
        };
    default:
      return state;
  }
}
