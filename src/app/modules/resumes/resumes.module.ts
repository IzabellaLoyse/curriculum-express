import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumesRoutingModule } from './resumes-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { ResumeListComponent } from './components/resume-list/resume-list.component';


@NgModule({
  declarations: [ResumeListComponent],
  imports: [
    CommonModule,
    ResumesRoutingModule,
    LayoutModule
  ]
})
export class ResumesModule { }
