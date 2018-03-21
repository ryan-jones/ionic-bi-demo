import { Component, Input } from '@angular/core';
import {
  ModalController,
  ActionSheetController,
  AlertController
} from 'ionic-angular';
import { CardList, CardKpi } from '../../app/models/card-list.model';
import { PmcScorecardPage } from '../../pages/pmc/pmc-scorecard/pmc-scorecard';
import { CardListService } from '../../services/card-list.service';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html'
})
export class CardListComponent {
  @Input() card: CardList;

  constructor(
    private modalCtrl: ModalController,
    private cardList: CardListService,
    private actionCtrl: ActionSheetController,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private emailComposer: EmailComposer,
    private socialSharing: SocialSharing
  ) {}

  setArrowDirection = (direction: string) => direction === 'down' ? 'md-arrow-dropdown' : 'md-arrow-dropup';

  loadCardOverview(kpi: CardKpi) {
    const data = this.cardList.getKpiScoreCardData(kpi);
    const modal = this.modalCtrl.create(PmcScorecardPage, data);
    modal.present();
  }

  onSelectManagerImage() {
    const actionSheet = this.actionCtrl.create({
      title: this.card.title,
      buttons: [
        {
          text: `Email ${this.card.managerName}`,
          handler: () => this.composeEmail()
        },
        {
          text: `Call ${this.card.managerName}`,
          handler: () => this.callPhoneNumber()
        },
        {
          text: `Whatsapp ${this.card.managerName}`,
          handler: () => this.activateWhatsapp()
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  callPhoneNumber() {
    this.callNumber.callNumber(this.card.managerPhoneNumber, true)
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

  composeEmail() {
    this.emailComposer.hasPermission()
      .then(res => {
        const email = {
          to: this.card.managerEmail,
          isHtml: true
        };
        this.emailComposer.open(email);
      })
      .catch(_ => this.emailFailed(`Doesn't have permission`));
  }

  emailFailed(titleText: string) {
    const alert = this.alertCtrl.create({
      title: titleText,
      subTitle: 'This phone does not support email feature',
      buttons: ['OK']
    });
    alert.present();
  }

  activateWhatsapp() {
    this.socialSharing
      .shareViaWhatsAppToReceiver(this.card.managerPhoneNumber, 'test message')
      .then(res => console.log('whatsapp res', res));
  }
}
