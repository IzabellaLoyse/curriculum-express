import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GenderTranslationPipe } from './pipes/gender-translation.pipe';

import { HttpClientModule } from '@angular/common/http';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { FieldErrorDirective } from './directives/field-error.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    GenderTranslationPipe,
    FieldErrorDirective,
    ValidationErrorsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService, TranslateStore],
  exports: [
    GenderTranslationPipe,
    FieldErrorDirective,
    ValidationErrorsComponent,
  ],
})
export class SharedModule {}
