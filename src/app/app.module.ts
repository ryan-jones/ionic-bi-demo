import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GasHomePage } from '../pages/gas-home/gas-home';
import { FavouritesPage } from '../pages/favourites/favourites';
import { MorePage } from '../pages/more/more';
import { OrganizationPage } from '../pages/organization/organization';
import { ProductionPage } from '../pages/production/production';
import { PmcPage } from '../pages/pmc/pmc';
import { FinancePage } from '../pages/finance/finance';
import { ProjectsPage } from '../pages/projects/projects';
import { ComponentsModule } from '../components/components.module';
import { DrilldownPage } from '../pages/drilldown/drilldown';
import { PMCDrilldownPage } from '../pages/pmc/pmc-drilldown/pmc-drilldown';
import { PmcScorecardPage } from '../pages/pmc/pmc-scorecard/pmc-scorecard';
import { CardListService } from '../services/card-list.service';

@NgModule({
  declarations: [
    MyApp,
    GasHomePage,
    FavouritesPage,
    MorePage,
    OrganizationPage,
    ProductionPage,
    PmcPage,
    ProjectsPage,
    FinancePage,
    TabsPage,
    DrilldownPage,
    PMCDrilldownPage,
    PmcScorecardPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GasHomePage,
    FavouritesPage,
    MorePage,
    OrganizationPage,
    ProductionPage,
    ProjectsPage,
    FinancePage,
    PmcPage,
    TabsPage,
    DrilldownPage,
    PMCDrilldownPage,
    PmcScorecardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CardListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
