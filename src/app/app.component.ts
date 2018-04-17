import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ProductionPage } from '../pages/production/production';
import { PmcPage } from '../pages/pmc/pmc';
import { OrganizationPage } from '../pages/organization/organization';
import { FinancePage } from '../pages/finance/finance';
import { ProjectsPage } from '../pages/projects/projects';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') navEl: NavController;
  private rootPage: any = TabsPage;
  private productionPage = ProductionPage;
  private pmcPage = PmcPage;
  private organizationPage = OrganizationPage;
  private financePage = FinancePage;
  private projectsPage = ProjectsPage;
  private settingsPage = SettingsPage;

  constructor(
    platform: Platform,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
  ) {
    platform.ready().then(() => {
      statusbar.overlaysWebView(false);
      splashScreen.hide();
    });
  }

  private onLoad(index: number, page: any): void {
    page ? this.navEl.setRoot(page) : this.navEl.setRoot(this.rootPage, { tabIndex: index });
    this.menuCtrl.close();
  }
}
