import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-production-drilldown',
  templateUrl: 'production-drilldown.html',
})
export class ProductionDrilldownPage {

  private slide: any;
  constructor(public navParams: NavParams) {
    this.slide = this.navParams.data;
  }
}
