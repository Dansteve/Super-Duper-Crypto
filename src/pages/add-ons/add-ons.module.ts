import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOnsPage } from './add-ons';

@NgModule({
  declarations: [
    AddOnsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOnsPage),
  ],
})
export class AddOnsPageModule {}
