import { AbstractControl } from '@angular/forms';

export const validateZipCode = (control: AbstractControl) => {
  const zipCode = control.value;

  if (zipCode && zipCode !== '') {
    const validZipCode = /^[0-9]{5}-[0-9]{3}$/.test(zipCode);

    return validZipCode
      ? null
      : {
          invalidZipCode: {
            valid: false,
          },
        };
  }

  return null;
};
