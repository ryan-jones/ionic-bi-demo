import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScreenshotsPage } from './screenshots';

@NgModule({
  declarations: [
    ScreenshotsPage,
  ],
  imports: [
    IonicPageModule.forChild(ScreenshotsPage),
  ],
})
export class ScreenshotsPageModule {}
