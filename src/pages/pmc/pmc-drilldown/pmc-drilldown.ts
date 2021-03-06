import { Component, OnInit } from '@angular/core';
import { NewsfeedPage } from '../../newsfeed/newsfeed';
import {
  IonicPage,
  NavParams,
  ViewController,
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
    private newsApi: NewsApiService,
    private loaderCtrl: LoadingController,
    private settingsService: SettingsService,
    private nativeService: NativeService,
    private favoritesService: FavoritesService
  ) {
    this.drilldownData = this.navParams.data;
  }

  ngOnInit(): void {
    this.favoritesService.$favDrilldowns.subscribe(drilldowns => this.drilldownData.data.forEach(kpi => {
      kpi.clicked = drilldowns.indexOf(kpi) > -1 ? true : false;
    }));
  }

  public onDismiss = (): Promise<any> => this.viewCtrl.dismiss();

  public onSelectCommentor(data: DrilldownData): void {
    const { commentor, commentorPhoneNumber, commentorEmail } = data;
    const actionSheet = this.nativeService.createActionSheet(commentor, commentorPhoneNumber, commentorEmail);
    actionSheet.present();
  }

  public openNewsFeed(date: string): void {
    const loader = this.loaderCtrl.create({ content: 'Loading Newsfeed' });
    loader.present();
    
    this.newsApi.getNews('2018-03-10', '2018-03-19').subscribe((res: any) => {
      loader.dismiss();
      this.navCtrl.push(this.newsFeedPage, {
        articles: res.articles.slice(0, 20)
      });
    });
  }

  public onToggleDrilldown(name: string, data: DrilldownData): void {
    data.clicked = !data.clicked;
    data.clicked ? this.addToFavorites(name, data) : this.removeFromFavorites(name, data);
  }

  private addToFavorites(name: string, data: DrilldownData): void {
    this.favoritesService.addToDrilldownDataList(name, data);
    this.favoritesService.showToast();
  }

  private removeFromFavorites(name: string, data: DrilldownData): void {
    this.favoritesService.removeFromFavoriteDrilldowns({ name, data });
    this.favoritesService.showDeleteToast();
  }

  public setDrilldownIcon = (drilldown: any): string =>  drilldown.clicked ? 'star' : 'star-outline';
  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
}
