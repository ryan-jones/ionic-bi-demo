import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALERTDATA } from './data';
import { Alert } from '../../app/models/alerts.model';
import { SettingsService } from '../../services/settings.service';
import { AlertService } from '../../services/alert-service';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  private alerts: Alert[];
  constructor(private settingsService: SettingsService, private alertService: AlertService) {}

 ngOnInit() {
   this.alerts = this.alertService.alerts;
 }

 private getBackground = (): string => this.settingsService.getBackground();
 private getTextColor = (): string => this.settingsService.getTextColor();
}
