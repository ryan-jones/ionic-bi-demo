import { CardList, CardKpi } from '../app/models/card-list.model';
import { DrilldownData } from '../app/models/pmc-trends-drilldown.model';
import { Subject } from 'rxjs/Subject';

export interface SliderChart {
  charts: any[];
}
export class FavoritesService {
  public favoriteCardLists: CardList[] = [];
  public favoriteSliderCharts: SliderChart[] = [];
  public favoriteKpis: CardKpi[] = [];
  public drillDownData: { name: string, data: DrilldownData }[] = [];

  public $favKpis: Subject<CardKpi[]> = new Subject<CardKpi[]>();
  public $favCardLists: Subject<CardList[]> = new Subject<CardList[]>();
  public $favSliderCharts: Subject<SliderChart[]> = new Subject<SliderChart[]>();
  public $favDrilldowns: Subject<any> = new Subject<any>();

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

  public removeFromSliderCharts(charts: SliderChart): void {
    this.favoriteSliderCharts = this.favoriteSliderCharts.filter(x => x !== charts);
    this.$favSliderCharts.next(this.favoriteSliderCharts);
  }

  public removeFromCardLists(card: CardList): void {
    this.favoriteCardLists = this.favoriteCardLists.filter(x => x !== card);
    this.$favCardLists.next(this.favoriteCardLists);
  }

  public removeFromKpiList(kpi: CardKpi): void {
    this.favoriteKpis = this.favoriteKpis.filter(x => x !== kpi);
    this.$favKpis.next(this.favoriteKpis);
  }

  public removeFromFavoriteDrilldowns(value: { name: string, data: DrilldownData }): void {
    this.drillDownData = this.drillDownData.filter(x => x.data !== value.data);
    this.$favDrilldowns.next(this.drillDownData);
  }

  public removeCategoryFromFavoriteDrilldowns(category: string): void {
    this.drillDownData = this.drillDownData.filter(data => data.name !== category);
    this.$favDrilldowns.next(this.drillDownData);
  }
}
