import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert } from '../app/models/alerts.model';
import { ALERTDATA } from '../pages/alerts/data';
import { NavController } from 'ionic-angular';

@Injectable()
export class AlertService {

  public alerts = ALERTDATA;

  constructor() {}

  setAlerts() {
    console.log('hi');
  }
}
