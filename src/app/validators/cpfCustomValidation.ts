import { AbstractControl } from '@angular/forms';
import { isCPF } from 'brazilian-values';

export const validatorCPF = (control: AbstractControl) => {
  const cpf = isCPF(control.value);

  return cpf
    ? null
    : {
        validatorCpf: {
          valid: false,
        },
      };
};


