import { Component, Input } from '@angular/core';
import { AlertService } from '../../services/alert-service';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../../pages/alerts/alerts';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input() title: string;
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
}
