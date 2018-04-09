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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
    });
  }

  private onLoad(index: number, page: any): void {
    if (page) {
      this.navEl.setRoot(page);
    } else {
      this.navEl.setRoot(this.rootPage, { tabIndex: index });
    }
    this.menuCtrl.close();
  }
}
