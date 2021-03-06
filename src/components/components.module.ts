import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications';
import { ChartComponent } from './chart/chart';
import { NgxEchartsModule } from 'ngx-echarts';
import { IonicModule } from 'ionic-angular';
import { CardListComponent } from './card-list/card-list';
import { ScorecardHeaderComponent } from './scorecard-header/scorecard-header';
import { HeaderComponent } from './header/header';
import { PmcSlidesComponent } from './pmc-slides/pmc-slides';
@NgModule({
  declarations: [
    NotificationsComponent,
    ChartComponent,
    CardListComponent,
    ScorecardHeaderComponent,
    HeaderComponent,
    PmcSlidesComponent
  ],
  imports: [NgxEchartsModule, IonicModule],
  exports: [
    NotificationsComponent,
    ChartComponent,
    NgxEchartsModule,
    CardListComponent,
    ScorecardHeaderComponent,
    HeaderComponent,
    PmcSlidesComponent
  ]
})
export class ComponentsModule {}
