import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { UserService } from "../services/user.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class UserEmailValidator implements AsyncValidator {
  constructor(private userService: UserService) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.getUsers().pipe(
      delay(1500),
      map((users: User[]) => {
        const isUser = users.find((user: User) => user.email === control.value);
        return isUser ? {userEmail: {value: control.value}} : null;
      }),
    );
  }
}
