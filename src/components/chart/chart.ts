import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import {NgxEchartsService} from 'ngx-echarts';
import 'echarts-gl';

@Component({
  selector: 'chart',
  template: `
    <div class="container-fluid chart-container">
      <div echarts id="chart"
           [options]="chartOptions"
           [loading]="chartLoading"
           (chartInit)="onChartInit($event)"
           (chartClick)="onChartClick($event)"
           [ngStyle]="{ 'height': height, 'width': '100%'}">
      </div>
    </div>
  `,
})
export class ChartComponent implements OnChanges {
  @Input() data: any;
  @Input() height: string;
  @Output() chartClickEmit = new EventEmitter<any>();

  public echartsInstance: any;
  public chartLoading = false;
  public chartOptions = {};

  constructor(private es: NgxEchartsService) {}

  ngOnChanges(): void {
    if (this.echartsInstance && this.data) {
      this.echartsInstance.resize();
      this.echartsInstance.setOption(this.data);
    }
  }

  public onChartInit(ec): void {
    this.echartsInstance = ec;
    if (this.echartsInstance) {
      setTimeout(() => {
        this.echartsInstance.resize();
        if (this.data) {
          this.echartsInstance.setOption(this.data);
        }
      }, 500); // Slight delay of chart render
    }
  }

  public onChartClick(event: any) {
    this.chartClickEmit.emit(event);
  }
}
