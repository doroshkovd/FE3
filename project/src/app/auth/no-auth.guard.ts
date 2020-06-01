import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { LoginUser } from "./user";
import { environment } from "../../environments/environment";
import { AppState } from "../store/app.reducer";
import { Store } from "@ngrx/store";
import { AuthState } from "./store/auth.reducer";

@Injectable({
  providedIn: 'root',
})

export class NoAuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.store.select('auth').pipe(
      take(1),
      map((state: AuthState) => state.user),
      map((user: LoginUser) => {
        if (!user) {
          return true;
        }

        return this.router.createUrlTree([environment.authRedirectUrl]);
      })
    )
  }
}
