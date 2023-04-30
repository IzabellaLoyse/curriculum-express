import { AbstractControl } from '@angular/forms';

export const validatorGender = (control: AbstractControl) => {
  const gender = control.value;
  const listValuesToCheck = ['feminine', 'masculine', 'not-inform'];
  const isValid = listValuesToCheck.includes(gender);

  return isValid ? null : { validatorGender: { valid: false } };
};
