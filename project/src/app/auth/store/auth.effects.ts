import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as fromAuthActions from './auth.actions';
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { LoginUser } from "../user";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {

  @Effect()
  authLogin$ = this.actions$.pipe(
    tap(() => {
      console.log('Effect login');
    }),
    ofType(fromAuthActions.LOGIN_START),
    switchMap((action: fromAuthActions.LoginStartAction) => {
      return this.authService.login(action.payload.email, action.payload.password)
        .pipe(
          map((user: LoginUser) => {
            localStorage.setItem('user', JSON.stringify(user));
            // this.autoLogout(Number(data.expiresIn)*1000);
            this.router.navigate([environment.authRedirectUrl]);
            return new fromAuthActions.LoginSuccessAction(user);
          }),
          catchError((error) => of(new fromAuthActions.LoginFailedAction(error)))
        );
    }),
  );

  @Effect()
  authLogout$ = this.actions$.pipe(
    ofType(fromAuthActions.LOGOUT_START),
    switchMap((action: fromAuthActions.LogoutStartAction) => {
      this.authService.logout();
      this.router.navigate(['/auth']);
      return of(new fromAuthActions.LogoutEndAction());
    })
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    ) {}
}
