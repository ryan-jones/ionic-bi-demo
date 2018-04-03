import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts';

@IonicPage()
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html'
})
export class FinancePage {
  private alertsPage = AlertsPage;

  constructor() {}
}
