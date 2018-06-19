import { Injectable } from '@angular/core';
import { ALERTDATA } from '../pages/alerts/data';

@Injectable()
export class AlertService {

  public alerts = ALERTDATA;

  constructor() {}
}
