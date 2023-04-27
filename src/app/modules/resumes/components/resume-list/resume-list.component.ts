import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { ExportService } from '../../../../services/export.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss'],
})
export class ResumeListComponent implements OnInit, OnDestroy {
  public subscription!: Subscription;
  public resumesList: ICurriculum[] = [] as ICurriculum[];

  constructor(
    private curriculumService: CurriculumService,
    private exportService: ExportService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.showResumeList();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public showResumeList() {
    this.subscription = this.curriculumService
      .getResumes()
      .subscribe((data) => {
        this.resumesList = data;
      });
  }

  public onEditResume(id: number) {
    this.router.navigate(['register/edit', id]);
  }

  public onRemoveResume(id: number) {
    this.curriculumService.deleteCurriculumById(id);
    this.showResumeList();
  }

  public exportCurriculum(id: number) {
    this.exportService.exportCurriculum(id);
  }
}
