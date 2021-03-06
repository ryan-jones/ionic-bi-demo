import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-drilldown',
  templateUrl: 'drilldown.html',
})
export class DrilldownPage {
  public project: any;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.project = this.navParams.data;
  }

  public onDismiss = (): Promise<any> => this.viewCtrl.dismiss();
}
