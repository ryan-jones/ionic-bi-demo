import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pmc-slides',
  templateUrl: 'pmc-slides.html'
})
export class PmcSlidesComponent {
  @Input() scoreTrends: any;
  @Output() clickedSlidePrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickedSlideNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickedDrilldown: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  private slidePrevious = (): void => this.clickedSlidePrev.emit(true);
  private slideNext = (): void => this.clickedSlideNext.emit(true);
  private activateDrilldown = (value: string): void => this.clickedDrilldown.emit(value);
}
