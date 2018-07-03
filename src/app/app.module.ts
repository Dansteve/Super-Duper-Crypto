import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {SidemeunPage} from '../pages/sidemeun/sidemeun';
import {CodeQuizPage} from "../pages/code-quiz/code-quiz";
import {LogoQuizPage} from "../pages/logo-quiz/logo-quiz";
import {InformationalQuizPage} from "../pages/informational-quiz/informational-quiz";
import { TokenPage } from '../pages/token/token';
import { AddOnsPage } from '../pages/add-ons/add-ons';
import { AchievementsPage } from '../pages/achievements/achievements';
import { UnlockedPage } from '../pages/unlocked/unlocked';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SidemeunPage,
    CodeQuizPage,
    LogoQuizPage,
    InformationalQuizPage,
    TokenPage,
    AddOnsPage,
    AchievementsPage,
    UnlockedPage,
    ContactPage
  ],
  imports: [
    BrowserModule, IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SidemeunPage,
    CodeQuizPage,
    LogoQuizPage,
    InformationalQuizPage, 
    TokenPage,
    AddOnsPage,
    AchievementsPage,
    UnlockedPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen, {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    }
  ]
})
export class AppModule {}