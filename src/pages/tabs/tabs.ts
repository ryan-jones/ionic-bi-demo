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

  tab1Root = PmcPage;
  tab2Root = ProjectsPage;
  tab3Root = ProductionPage;
  tab4Root = FavoritesPage;
  tab5Root = MorePage;

  private selectedIndex: number;

  constructor(private settingsService: SettingsService, private navParams: NavParams) {
    this.selectedIndex = navParams.data.tabIndex || 0;
  }

  private getBackground = (): string => this.settingsService.getBackground();

  private getTextColor = (): string => this.settingsService.isAltBackground() ? 'dark' : 'light';
}
