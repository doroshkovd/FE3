import { AbstractControl, ValidatorFn } from "@angular/forms";

export function urlValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length === 0) {
        return null;
      }
      const regExp: RegExp = new RegExp('^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$');
      const isValid: boolean = regExp.test(control.value);
      console.log(isValid);
      console.log(control.value);
      return !isValid ? {url: {value: control.value}} : null;
    };
}
