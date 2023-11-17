import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

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

  static lessOrEqualByYear(year: number): ValidatorFn {
    return function (form: AbstractControl): ValidationErrors | null {
      const value = form.value;

      if (!value) {
        return null;
      }

      if (value > year) {
        return { lessOrEqualByYear: {value: value, year: year}};
      }

      return null;
    }
  }
}
