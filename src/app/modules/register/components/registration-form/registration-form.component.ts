import { Component, Input, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
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
  @Input() public isEdit: boolean = false;
  @Input() public data!: ICurriculum[];

  public registrationForm: UntypedFormGroup = new UntypedFormGroup({});
  public address: IAddress = {} as IAddress;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private addressService: AddressService,
    private curriculumService: CurriculumService
  ) {}

  public ngOnInit(): void {
    this.createForm();

    if (this.isEdit) {
      this.registrationForm.patchValue(this.data);
    }
  }

  public createForm(): void {
    this.registrationForm = this.formBuilder.group({
      id: [Math.floor(Math.random() * 1000)],
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
      gender: ['', validatorGender, Validators.required],
      experiences: ['', Validators.required],

      address: this.formBuilder.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        complemento: ['', Validators.required],
        bairro: ['', Validators.required],
        numero: ['', Validators.required],
        localidade: ['', Validators.required],
        uf: [
          '',
          Validators.compose([Validators.required, Validators.maxLength(2)]),
        ],
      }),
    });
  }

  public onChangeAddress(): void {
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

  public validationForm(input: string) {
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

  public onReset() {
    this.registrationForm.reset();
  }

  public onSubmit(): void {
    if (this.registrationForm.valid) {
      this.curriculumService.addCurriculum(this.registrationForm.value);
    }

    this.onReset();
  }
}
