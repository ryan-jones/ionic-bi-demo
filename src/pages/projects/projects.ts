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

  ionViewDidLoad() {}

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
      title: {
        text: 'Active Projects by Location',
        x: 'center',
        top: 10,
        padding: 0
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: 'Projects',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 2, name: `Asab 2` },
            { value: 4, name: 'Ruwais 4' },
            { value: 5, name: 'Poelines 5' },
            { value: 3, name: 'Hasab 3' },
            { value: 1, name: 'Yassir 1' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    this.echarts2Data = {
      title: {
        text: 'Active Projects by Project Type',
        x: 'center',
        top: 10
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: 'Projects',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 6, name: 'Pipeline 6' },
            { value: 3, name: 'Exploration 3' },
            { value: 1, name: 'Other' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
