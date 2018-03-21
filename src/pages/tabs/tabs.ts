import { Component } from '@angular/core';
import { FavouritesPage } from '../favourites/favourites';
import { PmcPage } from '../pmc/pmc';
import { ProductionPage } from '../production/production';
import { OrganizationPage } from '../organization/organization';
import { MorePage } from '../more/more';
import { SettingsService } from '../../services/settings.service';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FavouritesPage;
  tab2Root = PmcPage;
  tab3Root = ProductionPage;
  tab4Root = OrganizationPage;
  tab5Root = MorePage;

  constructor(private settingsService: SettingsService) {}

  getBackground = () => this.settingsService.getBackground();

  getTextColor = () => this.settingsService.isAltBackground() ? 'dark' : 'light';
}
