import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { CardListService } from '../services/card-list.service';
import { NewsApiService } from '../services/news-api.service';

import { TabsPage } from '../pages/tabs/tabs';
import { GasHomePage } from '../pages/gas-home/gas-home';
import { FavouritesPage } from '../pages/favourites/favourites';
import { MorePage } from '../pages/more/more';
import { OrganizationPage } from '../pages/organization/organization';
import { ProductionPage } from '../pages/production/production';
import { PmcPage } from '../pages/pmc/pmc';
import { FinancePage } from '../pages/finance/finance';
import { ProjectsPage } from '../pages/projects/projects';
import { PMCDrilldownPage } from '../pages/pmc/pmc-drilldown/pmc-drilldown';
import { PmcScorecardPage } from '../pages/pmc/pmc-scorecard/pmc-scorecard';
import { DrilldownPage } from '../pages/projects/drilldown/drilldown';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';

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
    PmcScorecardPage,
    NewsfeedPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
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
    PmcScorecardPage,
    NewsfeedPage
  ],
  providers: [
    CallNumber,
    EmailComposer,
    SocialSharing,
    StatusBar,
    SplashScreen,
    CardListService,
    NewsApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
