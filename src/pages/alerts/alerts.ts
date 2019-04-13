import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Alert } from '../../app/models/alerts.model';
import { SettingsService } from '../../services/settings.service';
import { AlertService } from '../../services/alert-service';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  public alerts: Alert[];

  constructor(private settingsService: SettingsService, private alertService: AlertService) {}

 ngOnInit(): void {
   this.alerts = this.alertService.alerts;
 }

 public getBackground = (): string => this.settingsService.getBackground();
 public getTextColor = (): string => this.settingsService.getTextColor();
}
