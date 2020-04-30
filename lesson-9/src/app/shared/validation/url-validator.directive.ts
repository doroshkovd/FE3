import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";
import { urlValidator } from "./url.validator";

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) {
    return urlValidator()(control);
  }

}
