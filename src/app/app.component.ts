import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LogoQuizPage } from '../pages/logo-quiz/logo-quiz';
import { InformationalQuizPage } from '../pages/informational-quiz/informational-quiz';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = InformationalQuizPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
