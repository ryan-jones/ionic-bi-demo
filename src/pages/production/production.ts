import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';
import { AlertsPage } from '../alerts/alerts';
import { SLIDECHARTS } from './data';

@IonicPage()
@Component({
  selector: 'page-production',
  templateUrl: 'production.html'
})
export class ProductionPage {
  @ViewChild(Slides) slides: Slides;
  private alertsPage = AlertsPage;
  private slideCards: any[];

  constructor(private settingsService: SettingsService) {
    this.slideCards = SLIDECHARTS;
  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.centeredSlides = true;
    this.slides.slideToClickedSlide = true;
    this.slides.direction = 'vertical';
    this.slides.effect = 'coverflow';
    this.slides.slidesPerView = 3;
    this.slides.spaceBetween = -100;
    this.slides.coverflow = {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false,
    };
  }

  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
