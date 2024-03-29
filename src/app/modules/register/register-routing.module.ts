import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/components/layout/layout.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: RegistrationFormComponent,
      },
      {
        path: 'edit/:id',
        component: EditFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
