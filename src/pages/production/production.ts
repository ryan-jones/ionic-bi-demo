import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';

@IonicPage()
@Component({
  selector: 'page-production',
  templateUrl: 'production.html',
})
export class ProductionPage {
  private alertsPage = AlertsPage;

  constructor(private settingsService: SettingsService) {
  }
  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
