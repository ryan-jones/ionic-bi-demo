import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {
  private articles: any;

  constructor(public navParams: NavParams, private settingsService: SettingsService) {
    this.articles = this.navParams.get('articles');
  }

  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
}