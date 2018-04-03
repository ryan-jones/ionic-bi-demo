import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PMCDrilldownPage } from './pmc-drilldown';
@NgModule({
  declarations: [
    PMCDrilldownPage,
  ],
  imports: [
    IonicPageModule.forChild(PMCDrilldownPage),
  ],
})
export class PMCDrilldownPageModule {}
