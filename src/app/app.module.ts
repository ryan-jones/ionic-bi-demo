import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NgxEchartsModule } from 'ngx-echarts';

import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';

import { CardListService } from '../services/card-list.service';
import { NewsApiService } from '../services/news-api.service';
import { SettingsService } from '../services/settings.service';

import { TabsPage } from '../pages/tabs/tabs';
import { GasHomePage } from '../pages/gas-home/gas-home';
import { MorePage } from '../pages/more/more';
import { OrganizationPage } from '../pages/organization/organization';
import { ProductionPage } from '../pages/production/production';
import { PmcPage } from '../pages/pmc/pmc';
import { FinancePage } from '../pages/finance/finance';
import { ProjectsPage } from '../pages/projects/projects';
import { PMCDrilldownPage } from '../pages/pmc/pmc-drilldown/pmc-drilldown';
import { PmcScorecardPage } from '../pages/pmc/pmc-scorecard/pmc-scorecard';
import { DrilldownPage } from '../pages/projects/drilldown/drilldown';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { AlertsPage } from '../pages/alerts/alerts';
import { SettingsPage } from '../pages/settings/settings';
import { NativeService } from '../services/native.service';
import { FavoritesService } from '../services/favorites.service';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ProductionDrilldownPage } from '../pages/production/production-drilldown/production-drilldown';


@NgModule({
  declarations: [
    MyApp,
    GasHomePage,
    FavoritesPage,
    MorePage,
    OrganizationPage,
    ProductionPage,
    ProductionDrilldownPage,
    PmcPage,
    ProjectsPage,
    FinancePage,
    TabsPage,
    DrilldownPage,
    PMCDrilldownPage,
    PmcScorecardPage,
    NewsfeedPage,
    AlertsPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    NgxEchartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GasHomePage,
    FavoritesPage,
    MorePage,
    OrganizationPage,
    ProductionPage,
    ProductionDrilldownPage,
    ProjectsPage,
    FinancePage,
    PmcPage,
    TabsPage,
    DrilldownPage,
    PMCDrilldownPage,
    PmcScorecardPage,
    NewsfeedPage,
    AlertsPage,
    SettingsPage
  ],
  providers: [
    CallNumber,
    EmailComposer,
    SocialSharing,
    SplashScreen,
    CardListService,
    NewsApiService,
    SettingsService,
    NativeService,
    FavoritesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
