import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICurriculum } from '../interfaces/curriculum';
import { StorageService } from './storage.service';

const curriculumKey = 'key_curriculum';

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  public curriculum: ICurriculum[] = [] as ICurriculum[];
  public curriculumBehavior: BehaviorSubject<ICurriculum[]>;
  public curriculum$!: Observable<ICurriculum[]>;

  constructor(private storageService: StorageService) {
    this.curriculum = this.storageService.getDataItem(curriculumKey) || [];
    this.curriculumBehavior = new BehaviorSubject<ICurriculum[]>(
      this.curriculum
    );
    this.curriculum$ = this.curriculumBehavior.asObservable();
  }

  public getResumes(): Observable<ICurriculum[]> {
    return this.curriculum$;
  }

  public getResumeById(id: number): ICurriculum | undefined {
    const resume = this.curriculum.find((item) => item.id === id);
    return resume;
  }

  public saveCurriculum(): void {
    this.storageService.setDataItem(curriculumKey, this.curriculum);
  }

  public addCurriculum(curriculum: ICurriculum): void {
    this.curriculum.push(curriculum);
    this.curriculumBehavior.next(this.curriculum);
    this.saveCurriculum();
  }

  public deleteCurriculumById(id: number): void {
    const index = this.curriculum.findIndex((item) => item.id === id);

    this.curriculum.splice(index, 1);
    this.curriculumBehavior.next(this.curriculum);
    this.saveCurriculum();
  }

  public exportCurriculumById(id: number): string {
    const data = this.curriculum.map((item) =>
      item.id === id
        ? `
        Currículo de ${item.firstName} ${item.lastName}

        Nome completo: ${item.firstName} ${item.lastName}
        Email: ${item.email}
        Telefone: ${item.phone}


        `
        : ''
    );

    console.log(data);

    return data.join('');
  }
}
