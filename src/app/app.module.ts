import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {SidemeunPage} from '../pages/sidemeun/sidemeun';
import {CodeQuizPage} from "../pages/code-quiz/code-quiz";
import {LogoQuizPage} from "../pages/logo-quiz/logo-quiz";
import {InformationalQuizPage} from "../pages/informational-quiz/informational-quiz";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SidemeunPage,
    CodeQuizPage,
    LogoQuizPage,
    InformationalQuizPage
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
    InformationalQuizPage
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