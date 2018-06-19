import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {
  public articles: any;

  constructor(public navParams: NavParams, private settingsService: SettingsService) {
    this.articles = this.navParams.get('articles');
  }

  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
}
