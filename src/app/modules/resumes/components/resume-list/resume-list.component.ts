import { state, style, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { AlertService } from '../../../../services/alert.service';
import { ExportService } from '../../../../services/export.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss'],
  animations: [trigger('openClose', [state('open', style({}))])],
})
export class ResumeListComponent implements OnInit, OnDestroy {
  public subscription!: Subscription;
  public resumesList: ICurriculum[] = [] as ICurriculum[];

  constructor(
    private curriculumService: CurriculumService,
    private exportService: ExportService,
    private router: Router,
    private alertService: AlertService
  ) {}

  public ngOnInit(): void {
    this.showResumeList();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public showResumeList(): void {
    this.subscription = this.curriculumService
      .getResumes()
      .subscribe((data) => {
        this.resumesList = data;
      });
  }

  public onEditResume(id: number): void {
    this.router.navigate(['register/edit', id]);
  }

  public onRemoveResume(id: number): void {
    this.curriculumService.deleteCurriculumById(id);
    this.showResumeList();
    this.alertService.alertSuccess('Currículo removido com sucesso!');
  }

  public exportCurriculum(id: number): void {
    this.exportService.exportCurriculum(id);
    this.alertService.alertSuccess('Currículo exportado com sucesso!');
  }
}
