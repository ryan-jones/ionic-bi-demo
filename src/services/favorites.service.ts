import { CardList, CardKpi } from '../app/models/card-list.model';
import { DrilldownData } from '../app/models/pmc-trends-drilldown.model';
import { Subject } from 'rxjs/Subject';
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

export interface SliderChart {
  charts: any[];
}

@Injectable()
export class FavoritesService {
  public favoriteCardLists: CardList[] = [];
  public favoriteSliderCharts: SliderChart[] = [];
  public favoriteKpis: CardKpi[] = [];
  public drillDownData: { name: string, data: DrilldownData }[] = [];

  public $favKpis: Subject<CardKpi[]> = new Subject<CardKpi[]>();
  public $favCardLists: Subject<CardList[]> = new Subject<CardList[]>();
  public $favSliderCharts: Subject<SliderChart[]> = new Subject<SliderChart[]>();
  public $favDrilldowns: Subject<any> = new Subject<any>();

  constructor(private toastCtrl: ToastController) {}

  public getSliderCharts = (): SliderChart[] => this.favoriteSliderCharts;
  public getCardLists = (): CardList[] => this.favoriteCardLists;
  public getKpis = (): CardKpi[] => this.favoriteKpis;
  public getDrilldownDataList = (): any => this.drillDownData;

  public addToSliderCharts = (charts: SliderChart): number => this.favoriteSliderCharts.push(charts);
  public addToCardLists = (card: CardList): number => this.favoriteCardLists.push(card);
  public addToKpiList = (kpi: CardKpi): number => this.favoriteKpis.push(kpi);
  public addToDrilldownDataList = (name: string, data: DrilldownData): void => {
    const dataValue = { name, data };
    this.drillDownData.push(dataValue);
  }

  public removeFromSliderCharts = (charts: SliderChart): void => this.filterAndNext('favoriteSliderCharts', charts, '$favSliderCharts');

  public removeFromCardLists = (card: CardList): void => this.filterAndNext('favoriteCardLists', card, '$favCardLists');

  public removeFromKpiList = (kpi: CardKpi): void => this.filterAndNext('favoriteKpis', kpi, '$favKpis');

  public removeFromFavoriteDrilldowns(value: { name: string, data: DrilldownData }): void {
    this.drillDownData = this.drillDownData.filter(x => x.data !== value.data);
    this.$favDrilldowns.next(this.drillDownData);
  }

  public removeCategoryFromFavoriteDrilldowns(category: string): void {
    this.drillDownData = this.drillDownData.filter(data => data.name !== category);
    this.$favDrilldowns.next(this.drillDownData);
  }

  public filterAndNext(valueToNext: string, valueToFilter: any, subject: string, prop?: string) {
    this[valueToNext] = this[valueToNext].filter(value => prop ? value[prop] !== valueToFilter[prop] : value !== valueToFilter);
    this[subject].next(this[valueToNext]);
  }

  public showToast = (): void => this.createToast('Added');

  public showDeleteToast = (): void => this.createToast('Removed');

  public createToast(status: string): void {
    const toast = this.toastCtrl.create({
      message: `${status} from favorites!`,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }
}
