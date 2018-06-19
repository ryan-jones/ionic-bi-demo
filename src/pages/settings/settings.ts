import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(private settingsService: SettingsService) {}

  public onToggle = (toggle: Toggle): boolean => this.settingsService.setBackground(toggle.checked);

  public checkAltBackground = (): boolean => this.settingsService.isAltBackground();

  public getBackground = (): string => this.settingsService.getBackground();

  public getTextColor = (): string => this.settingsService.getTextColor();
}
