import { ActionSheetController, AlertController, ActionSheet, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
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
    private screenshot: Screenshot,
  ) {}

  public screenShot = async (): Promise<any> => {
      const image = await this.screenshot.URI(100);
      return image.URI;
  }

  public screenShotAndEmail = async () => {
    const res = await this.screenshot.save('jpg', 100);
    this.screen = res.filePath;
    try {
      await this.emailComposer.hasPermission();
      const emailContent = {
        attachments: [this.screen]
      };
      this.emailComposer.open(emailContent);
    } catch (err) {
      this.emailFailed(`Doesn't have permission`);
    }
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

  public composeEmail = async (email: string): Promise<any> => {
    try {
      await this.emailComposer.hasPermission();
      const emailContent = {
        to: email,
        isHtml: true
      };
      this.emailComposer.open(emailContent);
    } catch (err) {
      this.emailFailed(`Doesn't have permission`);
    }
  }

  public emailFailed(titleText: string): void {
    const alert = this.alertCtrl.create({
      title: titleText,
      subTitle: 'This device does not support email feature',
      buttons: ['OK']
    });
    alert.present();
  }

  public activateWhatsapp = (phoneNumber: string): Promise<any> => this.socialSharing.shareViaWhatsAppToReceiver(phoneNumber, 'test message');
}
