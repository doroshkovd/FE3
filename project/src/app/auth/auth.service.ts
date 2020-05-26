import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthResponse } from "./auth-response";
import { LoginUser } from "./user";
import { Router } from "@angular/router";
import { loader } from "../shared/loader/loader.decorator";
import { environment } from "../../environments/environment";
import { ErrorsService } from "../shared/errors/errors.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private errorService: ErrorsService) {}

  user: BehaviorSubject<LoginUser> = new BehaviorSubject<LoginUser>(null);

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
      tap((data: AuthResponse) => {
        this._loginHandler(data);
      })
    );
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
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
      this.user.next(loadedUser);
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
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.autoLogout(Number(data.expiresIn)*1000);
    this.router.navigate([environment.authRedirectUrl]);
  }
}
