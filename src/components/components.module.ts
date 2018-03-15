import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications';
import { ChartComponent } from './chart/chart';
import { NgxEchartsModule } from 'ngx-echarts';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [NotificationsComponent,
    ChartComponent],
	imports: [NgxEchartsModule, IonicModule],
	exports: [NotificationsComponent,
    ChartComponent, NgxEchartsModule]
})
export class ComponentsModule {}
