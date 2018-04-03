import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinancePage } from './finance';

@NgModule({
  declarations: [
    FinancePage,
  ],
  imports: [
    IonicPageModule.forChild(FinancePage),
  ],
})
export class FinancePageModule {}
