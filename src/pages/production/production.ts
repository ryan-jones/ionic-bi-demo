import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Slides, Platform, ModalController } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';
import { SLIDECHARTS } from './data';
import { ProductionDrilldownPage } from './production-drilldown/production-drilldown';
import { AlertService } from '../../services/alert-service';

@IonicPage()
@Component({
  selector: 'page-production',
  templateUrl: 'production.html'
})
export class ProductionPage {
  @ViewChild(Slides) slides: Slides;
  @ViewChild('chart') chartEl: any;
  private alertsPage = AlertsPage;
  private slideCards: any[];
  private selectedSlide: any;
  private chartRerendering: number;
  private width: number;
  private alerts: number;

  constructor(
    private settingsService: SettingsService,
    private platform: Platform,
    private modalCtrl: ModalController,
    private alertService: AlertService) {
    this.slideCards = SLIDECHARTS;
    this.width = platform.width();
  }

  ngOnInit() {
    this.alerts = this.alertService.alerts.length;
  }

  private activateModal(slide: any) {
    const modal = this.modalCtrl.create(ProductionDrilldownPage, slide);
    modal.present();
  }
  private getBackground = (): string => this.settingsService.getBackground();
  private getTextColor = (): string => this.settingsService.getTextColor();
  private getHeight = (): string => this.width < 768 ? '80%' : '65%';
  private getMargin = (): string => this.width < 768 ? '100px' : '0';
}
