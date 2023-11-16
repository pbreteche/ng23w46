import {AbstractControl, ValidationErrors} from "@angular/forms";

export class Validators {
  static lessOrEqualThisYear(form: AbstractControl): ValidationErrors | null {
    const value = form.value;

    if (!value) {
      return null;
    }

    const currentYear = (new Date()).getFullYear()

    if (value > currentYear) {
      return { lessOrEqualThisYear: {value: value, currentYear: currentYear}};
    }

    return null;
  }
}
