import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pmc-drilldown',
  templateUrl: 'pmc-drilldown.html',
})
export class PMCDrilldownPage {
  drilldownData: any;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.drilldownData = this.navParams.data;
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
