import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';

@IonicPage()
@Component({
  selector: 'page-organization',
  templateUrl: 'organization.html',
})
export class OrganizationPage {

  public alertsPage = AlertsPage;
  constructor(private settingsService: SettingsService) {
  }

  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
}
