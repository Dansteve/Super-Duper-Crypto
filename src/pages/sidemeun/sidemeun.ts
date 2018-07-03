import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LogoQuizPage } from "../logo-quiz/logo-quiz";
import {HomePage} from "../home/home";

/**
 * Generated class for the SidemeunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidemeun',
  templateUrl: 'sidemeun.html',
})
export class SidemeunPage {

  rootPage = LogoQuizPage;

constructor(public navCtrl : NavController, public navParams : NavParams ,public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidemeunPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
