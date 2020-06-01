import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { exhaustMap, map, take } from "rxjs/operators";
import { LoginUser } from "./user";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";
import { AuthState } from "./store/auth.reducer";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      map((state: AuthState) => state.user),
      exhaustMap((user: LoginUser) => {
        let cloneReq = null;
        if (!!user && user.token) {
          cloneReq = req.clone({
            params: req.params.set('auth', user.token),
          });
        }
        return next.handle(cloneReq || req);
      })
    );
  }
}
