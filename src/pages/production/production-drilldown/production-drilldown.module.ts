import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductionDrilldownPage } from './production-drilldown';

@NgModule({
  declarations: [
    ProductionDrilldownPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductionDrilldownPage),
  ],
})
export class ProductionDrilldownPageModule {}
