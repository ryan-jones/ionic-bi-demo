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

  private onToggle = (toggle: Toggle): boolean => this.settingsService.setBackground(toggle.checked);

  private checkAltBackground = (): boolean => this.settingsService.isAltBackground();

  private getBackground = (): string => this.settingsService.getBackground();

  private getTextColor = (): string => this.settingsService.getTextColor();
}
