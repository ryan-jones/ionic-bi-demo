import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit {
  private echartsData: any;
  private echarts2Data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
  }

  ngOnInit() {
    // this.echartsData = {
    //   backgroundColor: '#000',
    //   globe: {
    //     baseTexture: '../../assets/imgs/world.topo.bathy.200401.jpg',
    //     heightTexture: '../../assets/imgs/world.topo.bathy.200401.jpg',
    //     displacementScale: 0.04,
    //     shading: 'realistic',
    //     environment: '../../assets/imgs/starfield.jpg',
    //     realisticMaterial: {
    //       roughness: 0.9
    //     },
    //     postEffect: {
    //       enable: true
    //     },
    //     light: {
    //       main: {
    //         intensity: 5,
    //         shadow: true
    //       },
    //       ambientCubemap: {
    //         texture: '../../assets/pisa.hdr',
    //         diffuseIntensity: 0.2
    //       }
    //     }
    //   }
    // };
    this.echartsData = {
      angleAxis: {},
      radiusAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr'],
        z: 10
      },
      polar: {},
      series: [
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'Crude',
          stack: 'a'
        },
        {
          type: 'bar',
          data: [2, 4, 6, 8],
          coordinateSystem: 'polar',
          name: 'LNG',
          stack: 'a'
        },
        {
          type: 'bar',
          data: [1, 2, 3, 4],
          coordinateSystem: 'polar',
          name: 'Petroleum',
          stack: 'a'
        }
      ],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };

    this.echarts2Data = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Petroleum', 'LNG', '视频广告', 'Plastics', 'Refined']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Petroleum',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'LNG',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Crude',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Plastics',
          type: 'line',
          stack: '总量',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Refined',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
  }
}
