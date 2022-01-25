import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },


  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (module) => module.RegisterModule
      ),
  },

  {
    path: 'resumes',
    loadChildren: () =>
      import('./modules/resumes/resumes.module').then(
        (module) => module.ResumesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
