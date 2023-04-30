import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';
import { ResumeListComponent } from './components/resume-list/resume-list.component';
import { ResumesRoutingModule } from './resumes-routing.module';

@NgModule({
  declarations: [ResumeListComponent],
  imports: [CommonModule, ResumesRoutingModule, LayoutModule, SharedModule],
})
export class ResumesModule {}
