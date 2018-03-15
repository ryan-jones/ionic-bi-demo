import { Component } from '@angular/core';

/**
 * Generated class for the NotificationsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsComponent {

  text: string;

  constructor() {
    console.log('Hello NotificationsComponent Component');
    this.text = 'Hello World';
  }

}
