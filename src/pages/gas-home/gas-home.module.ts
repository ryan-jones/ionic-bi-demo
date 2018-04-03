import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GasHomePage } from './gas-home';

@NgModule({
  declarations: [
    GasHomePage,
  ],
  imports: [
    IonicPageModule.forChild(GasHomePage),
  ],
})
export class GasHomePageModule {}
