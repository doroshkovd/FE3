import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthResponse } from "./auth-response";
import { LoginUser } from "./user";
import { Router } from "@angular/router";
import { loader } from "../shared/loader/loader.decorator";
import { environment } from "../../environments/environment";
import { ErrorsService } from "../shared/errors/errors.service";
import { AppState } from "../store/app.reducer";
import { Store } from "@ngrx/store";
import * as authActions from './store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private errorService: ErrorsService,
    private store: Store<AppState>
  ) {}

  @loader()
  signUp(email: string, password: string, headers?: HttpHeaders) {
    return this.http.post(`${environment.signUpUrl}${environment.apiKey}`,
      {email, password, returnSecureToken: true}, { headers })
      .pipe(
        tap((data: AuthResponse) => {
          this._loginHandler(data);
        })
      );
  }
  @loader()
  login(email: string, password: string, headers?: HttpHeaders) {
    return this.http.post(`${environment.loginUrl}${environment.apiKey}`,
      {email, password, returnSecureToken: true }, { headers }
      ).pipe(
        tap(() => {
          console.log('Service login')
        }),
      map((data: AuthResponse) => {
        return this._loginHandler(data);
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

  autoLogin() {
    let user: {
      email: string,
      id: string,
      _token: string,
      _expirationDate: string
    };

    if (localStorage.getItem('user')) {
      user = JSON.parse(localStorage.getItem('user'));
    } else {
      return false;
    }

    const loadedUser = new LoginUser(
      user.email,
      user.id,
      user._token,
      new Date(user._expirationDate)
    );

    if (loadedUser.token) {
      this.store.dispatch(new authActions.LoginSuccessAction(loadedUser));
      const duration = (new Date(user._expirationDate)).getTime() - (new Date().getTime());
      this.autoLogout(duration);
    }
  }

  autoLogout(duration: number) {
    setTimeout(() => {
      this.logout();
      this.errorService.showError({title: 'Auto logout', message: 'Auto logout'}, 'success');
    }, duration);
  }

  private _loginHandler(data: AuthResponse) {
    const expirationDate: Date = new Date(new Date().getTime() +
      Number(data.expiresIn) * 1000);

    const user: LoginUser = new LoginUser(
      data.email,
      data.localId,
      data.idToken,
      expirationDate
    );

    return user;
  }
}
