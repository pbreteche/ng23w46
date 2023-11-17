import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Validators} from "./validators";

@Directive({
  selector: '[appLessOrEqualThisYear]',
  standalone: true,
  providers: [{provide: NG_VALIDATORS, useExisting: LessOrEqualThisYearDirective, multi: true}]
})
export class LessOrEqualThisYearDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.lessOrEqualThisYear(control);
  }
}
