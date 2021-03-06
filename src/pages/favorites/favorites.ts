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
  public alertsPage = AlertsPage;
  private sliderCharts: SliderChart[];
  private cardLists: CardList[];
  private favoriteKpis: CardList;
  private favoriteDrilldownData: { name: string, data: DrilldownData }[];
  public drilldownValues: string[];

  constructor(private settingsService: SettingsService, private favoritesService: FavoritesService) {}

  ionViewWillEnter() {
    this.getSliderCharts();
    this.getFavoriteKpis();
    this.getFavoriteDrilldownData();
    this.getFavoriteCardLists();
  }

  private getFavoriteKpis(): void {
    this.favoriteKpis = {
      title: 'Kpis',
      kpis: this.favoritesService.getKpis()
    };
  }
  private getFavoriteCardLists = (): CardList[] => this.cardLists = this.favoritesService.getCardLists();
  private getSliderCharts = (): SliderChart[] => this.sliderCharts = this.favoritesService.getSliderCharts();

  private getFavoriteDrilldownData(): void {
    this.favoriteDrilldownData = this.favoritesService.getDrilldownDataList();
    this.drilldownValues = sortedUniq(this.favoriteDrilldownData.map(x => x.name));
  }

  public removeFromFavoriteDrilldowns(name: string, data: DrilldownData): void {
    this.favoritesService.removeFromFavoriteDrilldowns({name, data});
    this.getFavoriteDrilldownData();
  }

  public removeCategoryFromFavoriteDrilldowns(name: string): void {
    this.favoritesService.removeCategoryFromFavoriteDrilldowns(name);
    this.getFavoriteDrilldownData();
  }

  public removeFromKpis(kpi: CardKpi): void {
    this.favoritesService.removeFromKpiList(kpi);
    this.getFavoriteKpis();
  }

  public removeFromSliderCharts(chart: SliderChart): void {
    this.favoritesService.removeFromSliderCharts(chart);
    this.getSliderCharts();
  }

  public removeFromCardLists(card: CardList): void {
    this.favoritesService.removeFromCardLists(card);
    this.getFavoriteCardLists();
  }

  public onDeletedCard = (cardList: CardList[]): CardList[] => this.cardLists = cardList;

  public onDeleteKpi = (kpis: CardKpi[]): CardKpi[] => this.favoriteKpis.kpis = kpis;

  public getBackground = (): string => this.settingsService.getBackground();

  public getTextColor = (): string => this.settingsService.isAltBackground() ? 'dark' : 'light';

  public setArrowDirection = (direction: string): string => direction === 'down' ? 'md-arrow-dropdown' : 'md-arrow-dropup';
}
