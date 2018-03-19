import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pmc-scorecard',
  templateUrl: 'pmc-scorecard.html',
})
export class PmcScorecardPage {
  private scorecard: any
  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
    this.scorecard = this.navParams.data;
    console.log('scorecard', this.scorecard);
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }
}
