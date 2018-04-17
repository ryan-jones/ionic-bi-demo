import { ActionSheetController, AlertController, ActionSheet } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { DrilldownData } from '../app/models/pmc-trends-drilldown.model';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';

@Injectable()
export class NativeService {

  private screen: any;

  constructor(
    private actionCtrl: ActionSheetController,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private socialSharing: SocialSharing,
    private screenshot: Screenshot
  ) {}

  public screenShot() {
    this.screenshot.save('jpg', 100, 'myscreenshot.jpg').then(res => {
      this.screen = res.filePath;
    });
    return this.screen;
  }

  public screenShotURI() {
    this.screenshot.URI(100).then(res => {
      this.screen = res.URI;

    });
  }

  public createActionSheet(person: string, phoneNumber: string, email: string): ActionSheet {
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

  public callPhoneNumber(phoneNumber: string): void {
    this.callNumber
      .callNumber(phoneNumber, true)
      .then(res => console.log('Launched dialer', res))
      .catch(_ => this.callFailed('The call was unable to be completed'));
  }

  public callFailed(reason: string): void {
    const alert = this.alertCtrl.create({
      title: 'Call failed!',
      subTitle: reason,
      buttons: ['OK']
    });
    alert.present();
  }

  public composeEmail(email: string): void {
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

  public emailFailed(titleText: string): void {
    const alert = this.alertCtrl.create({
      title: titleText,
      subTitle: 'This device does not support email feature',
      buttons: ['OK']
    });
    alert.present();
  }

  public activateWhatsapp(phoneNumber: string): void {
    this.socialSharing
      .shareViaWhatsAppToReceiver(phoneNumber, 'test message')
      .then(res => console.log('whatsapp res', res));
  }
}
