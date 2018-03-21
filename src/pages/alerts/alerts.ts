import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALERTDATA } from './data';
import { Alert } from '../../app/models/alerts.model';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {

  private alerts: Alert[];
  constructor(private settingsService: SettingsService) {}

 ngOnInit() {
   this.alerts = ALERTDATA;
 }

 getBackground = () => this.settingsService.getBackground();
 getTextColor = () => this.settingsService.getTextColor();
}
