import { AbstractControl } from '@angular/forms';
import { isPhone } from 'brazilian-values';

export const validatorPhone = (control: AbstractControl) => {
  const phone = isPhone(control.value);

  return phone
    ? null
    : {
        validationPhone: {
          valid: false,
        },
      };
};
