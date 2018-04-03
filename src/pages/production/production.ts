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

  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.effect = 'coverflow';
    this.setForIpadView();
    // this.width < 768 ? this.setForMobileView() : this.setForIpadView();
  }

  private setForMobileView(): void {
    this.slides.centeredSlides = true;
    this.slides.slideToClickedSlide = true;
    this.slides.direction = 'horizontal';
    this.slides.slidesPerView = 1;
    this.slides.coverflow = {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    };
  }

  private setForIpadView(): void {
    this.slides.centeredSlides = true;
    this.slides.slideToClickedSlide = true;
    this.slides.direction = 'vertical';
    this.slides.slidesPerView = 3;
    this.slides.coverflow = {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    };
  }

  private change(event): void {
    if (this.slides.clickedIndex) {
      this.selectedSlide = this.slides.clickedSlide.innerText;
    }
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
