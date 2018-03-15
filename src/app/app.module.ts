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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
