import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FinancePage } from '../finance/finance';
import { ProjectsPage } from '../projects/projects';
import { SettingsPage } from '../settings/settings';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  private financePage = FinancePage;
  private projectsPage = ProjectsPage;
  private settingsPage = SettingsPage;
  private alertsPage = AlertsPage;

  constructor(private settingsService: SettingsService) {}

  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
}
