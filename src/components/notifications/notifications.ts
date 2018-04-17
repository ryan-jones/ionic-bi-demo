import { Component, Input } from '@angular/core';
import { Alert } from '../../app/models/alerts.model';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsComponent {
  @Input() alerts: Alert[];

  constructor() {}
}
