import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, Platform, ModalController } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
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
  public slideCards: any[];
  private width: number;
  private alerts: number;

  constructor(
    private settingsService: SettingsService,
    private platform: Platform,
    private modalCtrl: ModalController,
    private alertService: AlertService) {
    this.slideCards = SLIDECHARTS;
    this.width = this.platform.width();
  }

  ngOnInit(): void {
    this.alerts = this.alertService.alerts.length;
  }

  public activateModal(slide: any): void {
    const modal = this.modalCtrl.create(ProductionDrilldownPage, slide);
    modal.present();
  }
  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
  public getHeight = (): string => this.width < 768 ? '80%' : '65%';
  public getMargin = (): string => this.width < 768 ? '100px' : '0';
}
