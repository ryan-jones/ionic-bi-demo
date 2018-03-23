import { ActionSheetController, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { DrilldownData } from '../app/models/pmc-trends-drilldown.model';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';

@Injectable()
export class NativeService {
  constructor(
    private actionCtrl: ActionSheetController,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing
  ) {}

  createActionSheet(person: string, phoneNumber: string, email: string) {
    return this.actionCtrl.create({
      title: 'Contact',
      buttons: [
        {
          text: `Email ${person}`,
          handler: () => this.composeEmail(email)
        },
        {
          text: `Call ${person}`,
          handler: () => this.callPhoneNumber(phoneNumber)
        },
        {
          text: `Whatsapp ${person}`,
          handler: () => this.activateWhatsapp(phoneNumber)
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
  }

  callPhoneNumber(phoneNumber: string) {
    this.callNumber
      .callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer', res))
      .catch(_ => this.callFailed('The call was unable to be completed'));
  }

  callFailed(reason: string) {
    const alert = this.alertCtrl.create({
      title: 'Call failed!',
      subTitle: reason,
      buttons: ['OK']
    });
    alert.present();
  }

  composeEmail(email: string) {
    this.emailComposer
      .hasPermission()
      .then(res => {
        const emailContent = {
          to: email,
          isHtml: true
        };
        this.emailComposer.open(emailContent);
      })
      .catch(_ => this.emailFailed(`Doesn't have permission`));
  }

  emailFailed(titleText: string) {
    const alert = this.alertCtrl.create({
      title: titleText,
      subTitle: 'This device does not support email feature',
      buttons: ['OK']
    });
    alert.present();
  }

  activateWhatsapp(phoneNumber: string) {
    this.socialSharing
      .shareViaWhatsAppToReceiver(phoneNumber, 'test message')
      .then(res => console.log('whatsapp res', res));
  }
}
