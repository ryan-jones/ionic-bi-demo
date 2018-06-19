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

  public slidePrevious = (): void => this.clickedSlidePrev.emit(true);
  public slideNext = (): void => this.clickedSlideNext.emit(true);
  public activateDrilldown = (value: string): void => this.clickedDrilldown.emit(value);
}
