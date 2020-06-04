import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./auth-response";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";
import * as fromAuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;

  constructor(private authService: AuthService, private store: Store<AppState>) {
  }

  submit(form: NgForm) {
    const $authObs = !this.isLoginMode ?
      this.authService.signUp(form.value.email, form.value.password) :
      this.store.dispatch(new fromAuthActions.LoginStartAction({
        email: form.value.email,
        password: form.value.password
      }));

    // $authObs.subscribe((res: AuthResponse) => {
    //   form.resetForm();
    // },
    //   (error) => {
    //     form.resetForm();
    //   });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    return false;
  }
}
