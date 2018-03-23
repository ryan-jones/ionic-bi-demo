import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AlertsPage } from '../alerts/alerts';
import { SettingsService } from '../../services/settings.service';
import { FavoritesService, SliderChart } from '../../services/favorites.service';
import { CardList, CardKpi } from '../../app/models/card-list.model';
import { DrilldownData } from '../../app/models/pmc-trends-drilldown.model';
import { sortedUniq } from 'lodash';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  private alertsPage = AlertsPage;
  private sliderCharts: SliderChart[];
  private cardLists: CardList[];
  private favoriteKpis: CardList;
  private favoriteDrilldownData: { name: string, data: DrilldownData }[];
  private drilldownValues: string[];

  constructor(private settingsService: SettingsService, private favoritesService: FavoritesService) {}

  ionViewWillEnter() {
    this.getSliderCharts();
    this.getFavoriteKpis();
    this.getFavoriteDrilldownData();
    this.getFavoriteCardLists();
  }

  getFavoriteKpis = () => {
    this.favoriteKpis = {
      title: 'Kpis',
      kpis: this.favoritesService.getKpis()
    };
  }
  getFavoriteCardLists = () => this.cardLists = this.favoritesService.getCardLists();
  getSliderCharts = () => this.sliderCharts = this.favoritesService.getSliderCharts();

  getFavoriteDrilldownData() {
    this.favoriteDrilldownData = this.favoritesService.getDrilldownDataList();
    this.drilldownValues = sortedUniq(this.favoriteDrilldownData.map(x => x.name));
  }

  removeFromFavoriteDrilldowns = (name: string, data: DrilldownData) => {
    this.favoritesService.removeFromFavoriteDrilldowns({name, data});
    this.getFavoriteDrilldownData();
  }

  removeCategoryFromFavoriteDrilldowns = (name: string) => {
    this.favoritesService.removeCategoryFromFavoriteDrilldowns(name);
    this.getFavoriteDrilldownData();
  }

  removeFromKpis(kpi: CardKpi) {
    this.favoritesService.removeFromKpiList(kpi);
    this.getFavoriteKpis();
  }

  removeFromSliderCharts(chart: SliderChart) {
    this.favoritesService.removeFromSliderCharts(chart);
    this.getSliderCharts();
  }

  removeFromCardLists(card: CardList) {
    this.favoritesService.removeFromCardLists(card);
    this.getFavoriteCardLists();
  }

  onDeletedCard = (cardList: CardList[]) => this.cardLists = cardList;

  onDeleteKpi = (kpis: CardKpi[]) => this.favoriteKpis.kpis = kpis;

  getBackground = () => this.settingsService.getBackground();

  getTextColor = () => this.settingsService.isAltBackground() ? 'dark' : 'light';

  setArrowDirection = (direction: string) => direction === 'down' ? 'md-arrow-dropdown' : 'md-arrow-dropup';

}
