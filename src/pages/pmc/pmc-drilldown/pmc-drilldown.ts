import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NewsfeedPage } from '../../newsfeed/newsfeed';
import {
  IonicPage,
  NavParams,
  ViewController,
  ActionSheetController,
  AlertController,
  NavController,
  LoadingController,
} from 'ionic-angular';
import {
  PMCTrendDrilldown,
  DrilldownData
} from '../../../app/models/pmc-trends-drilldown.model';
import { NewsApiService } from '../../../services/news-api.service';
import { SettingsService } from '../../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-pmc-drilldown',
  templateUrl: 'pmc-drilldown.html'
})
export class PMCDrilldownPage {
  private drilldownData: PMCTrendDrilldown;
  private newsFeedPage = NewsfeedPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private actionCtrl: ActionSheetController,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private emailComposer: EmailComposer,
    private socialSharing: SocialSharing,
    private newsApi: NewsApiService,
    private loaderCtrl: LoadingController,
    private settingsService: SettingsService
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
          text: `Whatsapp ${data.commentor}`,
          handler: () => this.activateWhatsapp(data)
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
    this.callNumber
      .callNumber(data.commentorPhoneNumber, true)
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

  activateWhatsapp(data: DrilldownData) {
    this.socialSharing
      .shareViaWhatsAppToReceiver(data.commentorPhoneNumber, 'test message')
      .then(res => console.log('whatsapp res', res));
  }

  openNewsFeed(date: string) {
    const loader = this.loaderCtrl.create({
      content: 'Loading Newsfeed'
    });
    loader.present();
    this.newsApi.getNews('2018-03-10', '2018-03-19').subscribe((res: any) => {
      loader.dismiss();
      this.navCtrl.push(this.newsFeedPage, {
        articles: res.articles.slice(0, 20)
      });
    });
  }

  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
