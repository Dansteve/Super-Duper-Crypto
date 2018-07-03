import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodeQuizPage } from './code-quiz';

@NgModule({
  declarations: [
    CodeQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(CodeQuizPage),
  ],
})
export class CodeQuizPageModule {}
