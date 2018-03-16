import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications';
import { ChartComponent } from './chart/chart';
import { NgxEchartsModule } from 'ngx-echarts';
import { IonicModule } from 'ionic-angular';
import { CardListComponent } from './card-list/card-list';
@NgModule({
	declarations: [NotificationsComponent,
    ChartComponent,
    CardListComponent],
	imports: [NgxEchartsModule, IonicModule],
	exports: [NotificationsComponent,
    ChartComponent, NgxEchartsModule,
    CardListComponent]
})
export class ComponentsModule {}
