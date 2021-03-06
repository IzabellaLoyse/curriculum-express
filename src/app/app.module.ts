import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { RegisterModule } from './modules/register/register.module';
import { ResumesModule } from './modules/resumes/resumes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegisterModule,
    ResumesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
