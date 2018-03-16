import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drilldown',
  templateUrl: 'drilldown.html',
})
export class DrilldownPage {
  project: any;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.project= this.navParams.data;
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

}
