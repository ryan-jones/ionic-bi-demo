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
export class PmcPage implements OnInit, AfterViewInit {
  @ViewChild(Slides) slides: Slides;
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

  ngAfterViewInit() {
    this.slides.effect = 'coverflow';
  }

  subscribeToKpis() {
    this.favoritesService.$favKpis.subscribe((kpis: CardKpi[]) => this.pmcScorecards.kpis.forEach(kpi => {
      kpi.clicked = kpis.indexOf(kpi) > -1 ? true : false;
    }));
  }

  subscribeToSliderCharts() {
    this.favoritesService.$favSliderCharts.subscribe((sliderCharts: SliderChart[]) => {
      this.scoreCardsFavorited = sliderCharts.indexOf(this.charts) > -1 ? true : false;
      this.setTrendsIcon();
    });
  }

  setAbcGasScoreTrends = () => this.abcGasScoreTrends = ABCGASTRENDS;

  setSafetyScoreTrends = () => this.safetyScoreTrends = SAFETYSCORETRENDS;

  setProfitabilityScoreTrends = () => this.profitabilityScoreTrends = PROFITABILITYSCORETRENDS;

  setPmcScorecards = () => this.pmcScorecards = PMCSCORECARDS;

  setCharts = () => this.charts = { charts: [this.abcGasScoreTrends, this.safetyScoreTrends, this.profitabilityScoreTrends] };

  activateDrilldown(name: string) {
    const drilldownData = { ...this.loadScore(name), name };
    const popover = this.modalCtr.create(PMCDrilldownPage, drilldownData);
    popover.present();
  }

  loadScore(seriesName: string) {
    const exp = new RegExp(seriesName, 'i');
    return TRENDSDRILLDOWN.find(kpi => exp.test(kpi.name));
  }

  toggleTrendsIcon() {
    this.toggle = !this.toggle;
    this.toggle ? this.addToFavorites() : this.removeFromFavorites();
  }

  addToFavorites() {
    this.favoritesService.addToSliderCharts(this.charts);
    this.scoreCardsFavorited = true;
    this.setTrendsIcon();
  }

  removeFromFavorites() {
    this.favoritesService.removeFromSliderCharts(this.charts);
    this.scoreCardsFavorited = false;
    this.setTrendsIcon();
  }

  setTrendsIcon = () => this.trendsIcon = this.scoreCardsFavorited ? 'star' : 'star-outline';
  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
