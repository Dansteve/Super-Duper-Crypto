import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoQuizPage } from './logo-quiz';

@NgModule({
  declarations: [
    LogoQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(LogoQuizPage),
  ],
})
export class LogoQuizPageModule {}
