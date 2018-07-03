import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationalQuizPage } from './informational-quiz';

@NgModule({
  declarations: [
    InformationalQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationalQuizPage),
  ],
})
export class InformationalQuizPageModule {}
