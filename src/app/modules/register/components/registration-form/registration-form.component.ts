import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddress } from 'src/app/interfaces/address';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { AddressService } from 'src/app/services/address.service';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { validatorCPF } from 'src/app/validators/cpfCustomValidation';
import { validatorGender } from 'src/app/validators/genderCustomValidation';
import { validatorPhone } from 'src/app/validators/phoneCustomValidation';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});

  address: IAddress = {} as IAddress;

  resumeData: ICurriculum[] = [] as ICurriculum[];

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private curriculumService: CurriculumService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.resumeData = this.curriculumService.getResume;
  }

  createForm() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(14),
          validatorCPF,
        ]),
      ],
      phone: ['', Validators.compose([Validators.required, validatorPhone])],
      gender: ['', validatorGender],
      experiences: ['', Validators.required],

      address: this.formBuilder.group({
        zip: ['', Validators.required],
        logradouro: ['', Validators.required],
        complement: ['', Validators.required],
        neighborhood: ['', Validators.required],
        number: ['', Validators.required],
        city: ['', Validators.required],
        state: [
          '',
          Validators.compose([Validators.required, Validators.maxLength(2)]),
        ],
      }),
    });
  }

  onChangeAddress() {
    let zipCode = this.registrationForm.get('address.zip')?.value;

    this.addressService.getAddress(zipCode).subscribe((data) => {
      this.address = data;
      const { localidade, logradouro } = data;

      this.registrationForm.patchValue({
        address: {
          logradouro: logradouro,
          complement: this.address.complemento,
          neighborhood: this.address.bairro,
          city: localidade,
          state: this.address.uf,
        },
      });
    });
  }

  validationForm(input: string) {
    return (
      !this.registrationForm.get(input)?.valid &&
      this.registrationForm.get(input)?.touched &&
      this.registrationForm.get(input)?.errors?.['required']
    );
  }

  validationEmail() {
    let inputEmail = this.registrationForm.get('email');

    if (inputEmail?.errors) {
      return inputEmail?.errors?.['email'] && inputEmail?.touched;
    }
  }

  validatorLengthField(input: string) {
    let field = this.registrationForm.get(input);

    if (field?.errors?.['maxlength']) {
      return field?.errors?.['maxlength'] && field?.touched;
    }

    return field?.errors?.['minlength'] && field?.touched;
  }

  correctValidField(input: string) {
    let field = this.registrationForm.get(input);

    if (field?.valid) {
      return field?.value;
    }
  }

  onReset() {
    this.registrationForm.reset();
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.curriculumService.addCurriculum(this.registrationForm.value);
    }

    this.onReset();
  }
}
