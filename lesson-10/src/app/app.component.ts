import { Component, OnInit } from '@angular/core';
import { UserService } from "./shared/services/user.service";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./shared/validators/custom-validators";
import { UserEmailValidator } from "./shared/validators/user-email-validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private userService: UserService, private userEmailValidator: UserEmailValidator) {
  }

  get email() {
    return this.form.get('email');
  }

  get getExpControls() {
    return this.form.get('exp') as FormArray;
  }

  ngOnInit(): void {
    this._initForm();
    // this.form.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
    this.getExpControls.valueChanges.subscribe((value) => {
      console.log(value);
    });
    // this.userService.getUsers()
    //   .subscribe((users) => users);
  }

  onSubmit() {
    console.log(this.form);
  }

  addExp() {
    const control = new FormControl('', Validators.required);
    this.getExpControls.push(control);
    return false;
  }

  removeExp(i) {
    this.getExpControls.removeAt(i);
    return false;
  }

  private _initForm() {
    this.form = new FormGroup({
      terms: new FormControl(false, [Validators.requiredTrue]),
      email: new FormControl('',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: this.userEmailValidator.validate.bind(this.userEmailValidator),
          updateOn: 'blur',
        }),
      url: new FormControl('', CustomValidators.urlValidator()),
      exp: new FormArray([
        new FormControl('', Validators.required),
      ]),
      pswGroup: new FormGroup({
        psw1: new FormControl('', [
          Validators.required,
          Validators.minLength(7),
        ]),
        psw2: new FormControl('', [
          Validators.required,
          Validators.minLength(7)
        ])
      }, CustomValidators.passwordEqual('psw1', 'psw2')),
    });
  }
}
