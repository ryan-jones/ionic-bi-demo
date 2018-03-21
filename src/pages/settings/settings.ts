import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(private settingsService: SettingsService) {}

  onToggle = (toggle: Toggle) => this.settingsService.setBackground(toggle.checked);

  checkAltBackground = () => this.settingsService.isAltBackground();

  getBackground = () => this.settingsService.getBackground();

  getTextColor = () => this.settingsService.getTextColor();
}
