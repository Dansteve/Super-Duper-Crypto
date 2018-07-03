import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import { SidemeunPage } from '../sidemeun/sidemeun';
import { LogoQuizPage } from '../logo-quiz/logo-quiz';
import {CodeQuizPage} from "../code-quiz/code-quiz";
import { InformationalQuizPage } from "../informational-quiz/informational-quiz";

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  constructor(public navCtrl : NavController) {}

  doClick() {
    this.navCtrl.push(SidemeunPage);
  }

  goToLogoQuiz(){
    this.navCtrl.setRoot(LogoQuizPage)
  }

  goToCodeQuiz() {
    this.navCtrl.setRoot(CodeQuizPage)
  }

  goToInfromationQuiz() {
    this.navCtrl.setRoot(InformationalQuizPage)
  }

}
