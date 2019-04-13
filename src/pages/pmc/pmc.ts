import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, ModalController, Slides } from 'ionic-angular';
import {
  SAFETYSCORETRENDS,
  PROFITABILITYSCORETRENDS,
  ABCGASTRENDS,
  TRENDSDRILLDOWN,
  PMCSCORECARDS
} from './data';
import { PMCDrilldownPage } from './pmc-drilldown/pmc-drilldown';
import { CardList, CardKpi } from '../../app/models/card-list.model';
import { FavoritesService, SliderChart } from '../../services/favorites.service';


@IonicPage()
@Component({
  selector: 'page-pmc',
  templateUrl: 'pmc.html'
})
export class PmcPage implements OnInit {
  @ViewChild(Slides) slides: Slides;
  private abcGasScoreTrends: any;
  private safetyScoreTrends: any;
  private profitabilityScoreTrends: any;
  private charts: SliderChart;
  private pmcScorecards: CardList;
  private trendsIcon = 'star-outline';
  private toggle = false;
  private scoreCardsFavorited = false;

  constructor(private modalCtr: ModalController, private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.setAbcGasScoreTrends();
    this.setProfitabilityScoreTrends();
    this.setSafetyScoreTrends();
    this.setPmcScorecards();
    this.setCharts();
    this.subscribeToKpis();
    this.subscribeToSliderCharts();
  }

  private subscribeToKpis(): void {
    this.favoritesService.$favKpis.subscribe((kpis: CardKpi[]) => this.pmcScorecards.kpis.forEach(kpi => {
      kpi.clicked = kpis.indexOf(kpi) > -1 ? true : false;
    }));
  }

  private subscribeToSliderCharts(): void {
    this.favoritesService.$favSliderCharts.subscribe((sliderCharts: SliderChart[]) => {
      this.scoreCardsFavorited = sliderCharts.indexOf(this.charts) > -1 ? true : false;
      this.setTrendsIcon();
    });
  }

  private setAbcGasScoreTrends = (): any => this.abcGasScoreTrends = ABCGASTRENDS;

  private setSafetyScoreTrends = (): any => this.safetyScoreTrends = SAFETYSCORETRENDS;

  private setProfitabilityScoreTrends = (): any => this.profitabilityScoreTrends = PROFITABILITYSCORETRENDS;

  private setPmcScorecards = (): CardList => this.pmcScorecards = PMCSCORECARDS;

  private setCharts = (): any => this.charts = { charts: [this.abcGasScoreTrends, this.safetyScoreTrends, this.profitabilityScoreTrends] };

  public activateDrilldown(name: string): void {
    const drilldownData = { ...this.loadScore(name), name };
    const popover = this.modalCtr.create(PMCDrilldownPage, drilldownData);
    popover.present();
  }

  private loadScore(seriesName: string): any {
    const exp = new RegExp(seriesName, 'i');
    return TRENDSDRILLDOWN.find(kpi => exp.test(kpi.name));
  }

  public toggleTrendsIcon(): any {
    this.toggle = !this.toggle;
    this.toggle ? this.addToFavorites() : this.removeFromFavorites();
  }

  private addToFavorites(): void {
    this.favoritesService.addToSliderCharts(this.charts);
    this.scoreCardsFavorited = true;
    this.setTrendsIcon();
   this.favoritesService.showToast();
  }

  private removeFromFavorites(): void {
    this.favoritesService.removeFromSliderCharts(this.charts);
    this.scoreCardsFavorited = false;
    this.setTrendsIcon();
    this.favoritesService.showDeleteToast();
  }

  public slidePrev = (): any => this.slides.slidePrev();
  public slideNext = (): any => this.slides.slideNext();
  private setTrendsIcon = (): string => this.trendsIcon = this.scoreCardsFavorited ? 'star' : 'star-outline';
}
