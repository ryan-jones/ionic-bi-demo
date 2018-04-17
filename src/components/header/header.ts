import { Component, Input } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { NativeService } from '../../services/native.service';
import { ScreenshotsPage } from '../../pages/screenshots/screenshots';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'header-nav',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input() title: string;

  image: any;

  constructor(private settingsService: SettingsService, private nativeService: NativeService, private modalCtrl: ModalController) {
  }

  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
  private takeScreenShot = (): void => {
    this.nativeService.screenShot().then(_ => {
      const modal = this.modalCtrl.create(ScreenshotsPage, { image: _ });
      modal.present();
    });
  }
}
