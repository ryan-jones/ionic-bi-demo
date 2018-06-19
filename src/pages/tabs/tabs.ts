import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { PmcPage } from '../pmc/pmc';
import { ProductionPage } from '../production/production';
import { MorePage } from '../more/more';
import { SettingsService } from '../../services/settings.service';
import { ProjectsPage } from '../projects/projects';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root = PmcPage;
  public tab2Root = ProjectsPage;
  public tab3Root = ProductionPage;
  public tab4Root = FavoritesPage;
  public tab5Root = MorePage;

  public selectedIndex: number;

  constructor(private settingsService: SettingsService, private navParams: NavParams) {
    this.selectedIndex = navParams.data.tabIndex || 0;
  }

  public getBackground = (): string => this.settingsService.getBackground();

  public getTextColor = (): string => this.settingsService.isAltBackground() ? 'dark' : 'light';
}
