import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Slides, Platform, ModalController } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';
import { SLIDECHARTS } from './data';
import { ProductionDrilldownPage } from './production-drilldown/production-drilldown';

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

  constructor(private settingsService: SettingsService, platform: Platform, private modalCtrl: ModalController) {
    this.slideCards = SLIDECHARTS;
    this.width = platform.width();
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
