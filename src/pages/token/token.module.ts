import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokenPage } from './token';

@NgModule({
  declarations: [
    TokenPage,
  ],
  imports: [
    IonicPageModule.forChild(TokenPage),
  ],
})
export class TokenPageModule {}
