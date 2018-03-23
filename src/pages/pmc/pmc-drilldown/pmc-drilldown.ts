import { Component, OnInit } from '@angular/core';
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
import { NativeService } from '../../../services/native.service';
import { FavoritesService } from '../../../services/favorites.service';

@IonicPage()
@Component({
  selector: 'page-pmc-drilldown',
  templateUrl: 'pmc-drilldown.html'
})
export class PMCDrilldownPage implements OnInit {
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
    private settingsService: SettingsService,
    private nativeService: NativeService,
    private favoritesService: FavoritesService
  ) {
    this.drilldownData = this.navParams.data;
    console.log('drilldown', this.drilldownData);
  }

  ngOnInit() {
    this.favoritesService.$favDrilldowns.subscribe(drilldowns => this.drilldownData.data.forEach(kpi => {
      kpi.clicked = drilldowns.indexOf(kpi) > -1 ? true : false;
    }));
  }

  onDismiss() {
    this.viewCtrl.dismiss();
  }

  onSelectCommentor(data: DrilldownData) {
    const { commentor, commentorPhoneNumber, commentorEmail } = data;
    const actionSheet = this.nativeService.createActionSheet(commentor, commentorPhoneNumber, commentorEmail);
    actionSheet.present();
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

  onToggleDrilldown(name: string, data: DrilldownData) {
    console.log('data', data);
    data.clicked = !data.clicked;
    data.clicked ? this.addToFavorites(name, data) : this.removeFromFavorites(name, data);
  }

  addToFavorites(name: string, data: DrilldownData) {
    this.favoritesService.addToDrilldownDataList(name, data);
  }

  removeFromFavorites(name: string, data: DrilldownData) {
    this.favoritesService.removeFromFavoriteDrilldowns({ name, data });
  }

  setDrilldownIcon = (drilldown: any) =>  drilldown.clicked ? 'star' : 'star-outline';
  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
