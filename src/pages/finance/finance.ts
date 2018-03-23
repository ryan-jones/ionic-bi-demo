import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts';

@IonicPage()
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html',
})
export class FinancePage {
  private alertsPage = AlertsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
