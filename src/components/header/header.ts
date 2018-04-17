import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { AlertService } from '../../services/alert-service';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../../pages/alerts/alerts';

@Component({
  selector: 'header',
=======
import { SettingsService } from '../../services/settings.service';
import { NativeService } from '../../services/native.service';
import { ScreenshotsPage } from '../../pages/screenshots/screenshots';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'header-nav',
>>>>>>> feature/native-features
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input() title: string;
<<<<<<< HEAD
  private alerts: number;
  private alertsPage: AlertsPage;

  constructor(private alertService: AlertService, private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.alerts = this.alertService.alerts.length;
  }

  private openAlertsPage() {
    this.alertService.setAlerts();
  }
  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
=======

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
>>>>>>> feature/native-features
}
