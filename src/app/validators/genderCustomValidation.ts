import { UntypedFormControl } from '@angular/forms';

export const validatorGender = (control: UntypedFormControl) => {
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
