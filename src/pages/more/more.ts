import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FinancePage } from '../finance/finance';
import { ProjectsPage } from '../projects/projects';
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

  private financePage = FinancePage;
  private organizationPage = OrganizationPage;
  private settingsPage = SettingsPage;
  private alertsPage = AlertsPage;

  constructor(private settingsService: SettingsService) {}

  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
}
