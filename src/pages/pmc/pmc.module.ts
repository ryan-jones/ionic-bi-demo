import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PmcPage } from './pmc';

@NgModule({
  declarations: [
    PmcPage,
  ],
  imports: [
    IonicPageModule.forChild(PmcPage),
  ],
})
export class PmcPageModule {}
