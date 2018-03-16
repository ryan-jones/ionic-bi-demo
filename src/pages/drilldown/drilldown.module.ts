import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrilldownPage } from './drilldown';

@NgModule({
  declarations: [
    DrilldownPage,
  ],
  imports: [
    IonicPageModule.forChild(DrilldownPage),
  ],
})
export class DrilldownPageModule {}
