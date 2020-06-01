import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs/operators";
import { LoginUser } from "./user";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";
import { AuthState } from "./store/auth.reducer";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('auth')
      .pipe(
        take(1),
        map((state: AuthState) => state.user),
        map((user: LoginUser) => {
          if (!!user) {
            return true;
          }

          this.router.navigate(['/auth']);
          return false;
        })
      );
  }

}
