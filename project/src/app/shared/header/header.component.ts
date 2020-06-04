import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { LoginUser } from "../../auth/user";
import { AuthService } from "../../auth/auth.service";
import { AppState } from "../../store/app.reducer";
import { Store } from "@ngrx/store";
import { AuthState } from "../../auth/store/auth.reducer";
import { map } from "rxjs/operators";
import * as fromAuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = false;
  $user = this.store.select('auth');
  userEmail: string;
  userEmailSubscription: Subscription;

  constructor(private store: Store<AppState>, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userEmailSubscription = this.store.select('auth')
      .pipe(
        map((state: AuthState) => state.user )
      )
      .subscribe((user: LoginUser) => {
        if (!!user) {
          this.userEmail = user.email;
        }
      });
  }

  onLogout() {
    this.store.dispatch(new fromAuthActions.LogoutStartAction());
    return false;
  }

  ngOnDestroy(): void {
    this.userEmailSubscription.unsubscribe();
  }
}
