import { Injectable } from '@angular/core';
import { CurriculumService } from './curriculum.service';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor(private curriculumService: CurriculumService) {}

  public exportCurriculum(id: number): void {
    const data = this.curriculumService.exportCurriculumById(id);

    const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'curriculum.txt');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}
