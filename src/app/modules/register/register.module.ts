import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { RegisterRoutingModule } from './register-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [RegistrationFormComponent, EditFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
    LayoutModule,
  ],
})
export class RegisterModule {}
