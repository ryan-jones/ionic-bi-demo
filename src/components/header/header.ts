import { Component, Input } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { NativeService } from '../../services/native.service';
import { ScreenshotsPage } from '../../pages/screenshots/screenshots';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'header-nav',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input() title: string;

  constructor(
    private settingsService: SettingsService,
    private nativeService: NativeService, 
    private navCtrl: NavController) {
  }

  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
  public takeScreenShot = (): void => {
    this.nativeService.screenShot().then(image => this.navCtrl.push(ScreenshotsPage, { image }));
  }
}
