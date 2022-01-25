import { FormControl } from '@angular/forms';

export const validatorGender = (control: FormControl) => {
  const gender = control.value;
  const listValuesToCheck = ['feminine', 'masculine', 'not-inform'];

  return listValuesToCheck.includes(gender)
    ? null
    : {
        validatorGender: {
          valid: false,
        },
      };
};
