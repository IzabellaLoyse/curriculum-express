import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ICurriculum } from '../interfaces/curriculum';
import { StorageService } from './storage.service';

const curriculumKey = 'key_curriculum';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  curriculum: ICurriculum[] = [] as ICurriculum[];
  resumesList: Subject<ICurriculum[]> = new Subject();

  constructor(private storageService: StorageService) {
    this.curriculum = this.storageService.getDataItem(curriculumKey) || [];
  }

  // getCurriculum(key: string): ICurriculum {

  // }

  getResumes(): Observable<ICurriculum[]> {
    const resume = of(this.curriculum);
    return resume;
  }



  get getResume(): ICurriculum[] {
    return this.curriculum;
  }

  saveCurriculum() {
    this.storageService.setDataItem(curriculumKey, this.curriculum);
  }

  addCurriculum(curriculum: ICurriculum) {
    this.curriculum.push(curriculum);
    console.log(curriculum);

    this.saveCurriculum();
  }

  
}
