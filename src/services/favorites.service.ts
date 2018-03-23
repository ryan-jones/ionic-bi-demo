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

  getSliderCharts = () => this.favoriteSliderCharts;
  getCardLists = () => this.favoriteCardLists;
  getKpis = () => this.favoriteKpis;
  getDrilldownDataList = () => this.drillDownData;

  addToSliderCharts = (charts: SliderChart) => this.favoriteSliderCharts.push(charts);
  addToCardLists = (card: CardList) => this.favoriteCardLists.push(card);
  addToKpiList = (kpi: CardKpi) => this.favoriteKpis.push(kpi);
  addToDrilldownDataList = (name: string, data: DrilldownData) => {
    const dataValue = { name, data };
    this.drillDownData.push(dataValue);
  }

  removeFromSliderCharts(charts: SliderChart) {
    this.favoriteSliderCharts = this.favoriteSliderCharts.filter(x => x !== charts);
    this.$favSliderCharts.next(this.favoriteSliderCharts);
  }

  removeFromCardLists(card: CardList) {
    this.favoriteCardLists = this.favoriteCardLists.filter(x => x !== card);
    this.$favCardLists.next(this.favoriteCardLists);
  }

  removeFromKpiList(kpi: CardKpi) {
    this.favoriteKpis = this.favoriteKpis.filter(x => x !== kpi);
    this.$favKpis.next(this.favoriteKpis);
  }

  removeFromFavoriteDrilldowns(value: { name: string, data: DrilldownData }) {
    this.drillDownData = this.drillDownData.filter(x => x !== value);
    this.$favDrilldowns.next(this.drillDownData);
  }

  removeCategoryFromFavoriteDrilldowns(category: string) {
    this.drillDownData = this.drillDownData.filter(data => data.name !== category);
    this.$favDrilldowns.next(this.drillDownData);
  }
}
