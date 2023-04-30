import { AbstractControl } from '@angular/forms';
import { isDate } from 'brazilian-values';

export const validatorBirthDate = (control: AbstractControl) => {
  const birthDate = control.value;

  const isValid = isDate(birthDate);

  return isValid ? null : { validatorBirthDate: { valid: false } };
};
