import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  private alertsPage = AlertsPage;

  constructor(private settingsService: SettingsService) {}

  getBackground = () => this.settingsService.getBackground();

  getTextColor = () => this.settingsService.isAltBackground() ? 'dark' : 'light';
}
