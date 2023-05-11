import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegistrationFormComponent, EditFormComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({ dropSpecialCharacters: false }),
    LayoutModule,
    SharedModule,
  ],
})
export class RegisterModule {}
