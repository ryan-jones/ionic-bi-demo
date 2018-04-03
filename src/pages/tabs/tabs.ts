import { Component } from '@angular/core';
import { FavoritesPage } from '../favorites/favorites';
import { PmcPage } from '../pmc/pmc';
import { ProductionPage } from '../production/production';
import { MorePage } from '../more/more';
import { SettingsService } from '../../services/settings.service';
import { ProjectsPage } from '../projects/projects';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PmcPage;
  tab2Root = ProjectsPage;
  tab3Root = ProductionPage;
  tab4Root = FavoritesPage;
  tab5Root = MorePage;

  constructor(private settingsService: SettingsService) {}

  private getBackground = (): string => this.settingsService.getBackground();

  private getTextColor = (): string => this.settingsService.isAltBackground() ? 'dark' : 'light';
}
