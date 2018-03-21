import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-organization',
  templateUrl: 'organization.html',
})
export class OrganizationPage {

  constructor(private settingsService: SettingsService) {
  }

  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
