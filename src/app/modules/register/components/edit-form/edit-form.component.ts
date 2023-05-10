import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurriculum } from '../../../../interfaces/curriculum';
import { CurriculumService } from '../../../../services/curriculum.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  public btnText = 'Editar';
  public titleForm = 'Edite seu cadastro';
  public dataForm: ICurriculum[] = [];

  constructor(
    private curriculumService: CurriculumService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.dataForm = this.curriculumService.getResumeById(id);
  }

  public editCurriculum(curriculum: any): void {
    this.curriculumService.updateCurriculum(curriculum);
  }
}
