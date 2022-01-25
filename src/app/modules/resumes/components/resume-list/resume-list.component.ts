import { Component, OnInit } from '@angular/core';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { CurriculumService } from 'src/app/services/curriculum.service';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {

  resumesList: ICurriculum[] = [] as ICurriculum[];

  constructor(private curriculumService: CurriculumService) { }

  ngOnInit(): void {
    this.showResumeList();
  }

  showResumeList() {
     this.curriculumService.getResumes().subscribe(resumes => {
      this.resumesList = resumes;
    });
    console.log(this.resumesList)

  }

}
