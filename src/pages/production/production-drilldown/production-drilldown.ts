import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-production-drilldown',
  templateUrl: 'production-drilldown.html',
})
export class ProductionDrilldownPage {

  private slide: any;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.slide = this.navParams.data;
  }

  private onDismiss = (): Promise<any> => this.viewCtrl.dismiss();
}
