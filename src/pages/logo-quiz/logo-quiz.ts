import {Component} from '@angular/core';
import {IonicPage, NavController, ModalController, NavParams} from 'ionic-angular';

import {SidemeunPage} from "../sidemeun/sidemeun";

/**
 * Generated class for the LogoQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({selector: 'page-logo-quiz', templateUrl: 'logo-quiz.html'})
export class LogoQuizPage {

  constructor(public navCtrl : NavController, public navParams : NavParams, public modalCtrl : ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoQuizPage');
  }

  openCustomMeun() {
    let profileModal = this
      .modalCtrl
      .create(SidemeunPage, {userId: 8675309});
    profileModal.present();
  }

}
