import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./auth-response";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;

  constructor(private authService: AuthService) {
  }

  submit(form: NgForm) {
    const $authObs = !this.isLoginMode ?
      this.authService.signUp(form.value.email, form.value.password) :
      this.authService.login(form.value.email, form.value.password);

    $authObs.subscribe((res: AuthResponse) => {
      form.resetForm();
    },
      (error) => {
        form.resetForm();
      });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    return false;
  }
}
