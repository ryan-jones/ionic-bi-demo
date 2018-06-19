import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FinancePage } from '../finance/finance';
import { SettingsPage } from '../settings/settings';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';
import { OrganizationPage } from '../organization/organization';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  public financePage = FinancePage;
  public organizationPage = OrganizationPage;
  public settingsPage = SettingsPage;
  public alertsPage = AlertsPage;

  constructor(public settingsService: SettingsService) {}

  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
}
