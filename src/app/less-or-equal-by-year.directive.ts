import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {Validators} from "./validators";

@Directive({
  selector: '[appLessOrEqualByYear]',
  standalone: true,
  providers: [{provide: NG_VALIDATORS, useExisting: LessOrEqualByYearDirective, multi: true}]
})
export class LessOrEqualByYearDirective implements Validator {
  @Input('appLessOrEqualByYear')
  year: number|string = 0;

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.lessOrEqualByYear(+this.year)(control);
  }
}
