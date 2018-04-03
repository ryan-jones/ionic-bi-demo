import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-production-drilldown',
  templateUrl: 'production-drilldown.html',
})
export class ProductionDrilldownPage {

  private slide: any;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.slide = this.navParams.data;
  }

  private onDismiss(): void {
    this.viewCtrl.dismiss();
  }
}
