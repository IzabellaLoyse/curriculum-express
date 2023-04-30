import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'genderTranslation',
})
export class GenderTranslationPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: string | undefined): string {
    switch (value) {
      case 'feminine':
        return this.translateService.instant('Feminino');
      case 'masculine':
        return this.translateService.instant('Masculino');
      case 'not-inform':
        return this.translateService.instant('Não informado');
      default:
        return '';
    }
  }
}
