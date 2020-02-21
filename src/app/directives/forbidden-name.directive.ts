import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } 
from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}

@Directive({
  selector: '[ForbiddenName]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective,
    multi: true
  }]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('ForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName,
      'i'))(control)
      : null;
  }
}