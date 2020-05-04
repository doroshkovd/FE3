import { ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators {

  static urlValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length === 0) {
        return null;
      }
      const regExp: RegExp = new RegExp('^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$');
      const isValid: boolean = regExp.test(control.value);
      return !isValid ? {url: {value: control.value}} : null;
    };
  }

  static passwordEqual(field1, field2): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {

      return control.value[field1] !== control.value[field2] ? {
        passwordEqual: { value: control.value } } : null;
      }
  }
}
