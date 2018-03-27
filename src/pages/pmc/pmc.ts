import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular';
import {
  SAFETYSCORETRENDS,
  PROFITABILITYSCORETRENDS,
  ABCGASTRENDS,
  TRENDSDRILLDOWN,
  PMCSCORECARDS
} from './data';
import { PMCDrilldownPage } from './pmc-drilldown/pmc-drilldown';
import { CardList, CardKpi } from '../../app/models/card-list.model';
import { AlertsPage } from '../alerts/alerts';
import { SettingsService } from '../../services/settings.service';
import { FavoritesService, SliderChart } from '../../services/favorites.service';

@IonicPage()
@Component({
  selector: 'page-pmc',
  templateUrl: 'pmc.html'
})
export class PmcPage implements OnInit {
  private abcGasScoreTrends: any;
  private safetyScoreTrends: any;
  private profitabilityScoreTrends: any;
  private charts: SliderChart;
  private pmcScorecards: CardList;
  private alertsPage = AlertsPage;
  private trendsIcon = 'star-outline';
  private toggle = false;
  private scoreCardsFavorited = false;

  constructor(
    private modalCtr: ModalController,
    private settingsService: SettingsService,
    private favoritesService: FavoritesService) {}

  ngOnInit() {
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

  private activateDrilldown(name: string): void {
    const drilldownData = { ...this.loadScore(name), name };
    const popover = this.modalCtr.create(PMCDrilldownPage, drilldownData);
    popover.present();
  }

  private loadScore(seriesName: string): any {
    const exp = new RegExp(seriesName, 'i');
    return TRENDSDRILLDOWN.find(kpi => exp.test(kpi.name));
  }

  private toggleTrendsIcon(): any {
    this.toggle = !this.toggle;
    this.toggle ? this.addToFavorites() : this.removeFromFavorites();
  }

  private addToFavorites(): void {
    this.favoritesService.addToSliderCharts(this.charts);
    this.scoreCardsFavorited = true;
    this.setTrendsIcon();
  }

  private removeFromFavorites(): void {
    this.favoritesService.removeFromSliderCharts(this.charts);
    this.scoreCardsFavorited = false;
    this.setTrendsIcon();
  }

  private setTrendsIcon = (): string => this.trendsIcon = this.scoreCardsFavorited ? 'star' : 'star-outline';
  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
}
