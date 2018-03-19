import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ProductionPage } from '../pages/production/production';
import { PmcPage } from '../pages/pmc/pmc';
import { OrganizationPage } from '../pages/organization/organization';
import { FinancePage } from '../pages/finance/finance';
import { ProjectsPage } from '../pages/projects/projects';

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


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private onLoad(page: any): void {
    this.navEl.setRoot(page);
    this.menuCtrl.close();
  }
}
