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
  @ViewChild('chart') chartEl: any;
  private alertsPage = AlertsPage;
  private slideCards: any[];
  private selectedSlide: any;
  private chartRerendering: number;

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
    this.slides.coverflow = {
      rotate: 0,
      stretch: 10,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    };
  }

  change(event) {
    if (this.slides.clickedIndex) {
      this.selectedSlide = this.slides.clickedSlide.innerText;
    }
  }
  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
