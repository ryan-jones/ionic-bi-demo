import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-production-drilldown',
  templateUrl: 'production-drilldown.html',
})
export class ProductionDrilldownPage {

  public slide: any;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.slide = this.navParams.data;
  }

  public onDismiss = (): Promise<any> => this.viewCtrl.dismiss();
}
