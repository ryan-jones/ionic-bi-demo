import { Component } from '@angular/core';
import {
  IonicPage,
  NavParams,
  ViewController,
  ActionSheetController,
  AlertController
} from 'ionic-angular';
import {
  PMCTrendDrilldown,
  DrilldownData
} from '../../../app/models/pmc-trends-drilldown.model';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-pmc-drilldown',
  templateUrl: 'pmc-drilldown.html'
})
export class PMCDrilldownPage {
  drilldownData: PMCTrendDrilldown;

  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private actionCtrl: ActionSheetController,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private emailComposer: EmailComposer
  ) {
    this.drilldownData = this.navParams.data;
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  onSelectComment(data: DrilldownData) {
    const actionSheet = this.actionCtrl.create({
      title: 'Contact',
      buttons: [
        {
          text: `Email ${data.commentor}`,
          handler: () => this.composeEmail(data)
        },
        {
          text: `Call ${data.commentor}`,
          handler: () => this.callPhoneNumber(data)
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  callPhoneNumber(data: DrilldownData) {
    this.callNumber.callNumber(data.commentorPhoneNumber, true)
      .then(res => console.log('Launched dialer', res))
      .catch(err => this.callFailed('The call was unable to be completed'));
  }

  callFailed(reason: string) {
    const alert = this.alertCtrl.create({
      title: 'Call failed!',
      subTitle: reason,
      buttons: ['OK']
    });
    alert.present();
  }

  composeEmail(data) {
    this.emailComposer
      .hasPermission()
      .then(res => {
        const email = {
          to: data.commentorEmail,
          isHtml: true
        };
        this.emailComposer.open(email);
      })
      .catch(err => this.emailFailed(`Doesn't have permission`));
  }

  emailFailed(titleText: string) {
    const alert = this.alertCtrl.create({
      title: titleText,
      subTitle: 'This phone does not support email feature',
      buttons: ['OK']
    });
    alert.present();
  }
}
