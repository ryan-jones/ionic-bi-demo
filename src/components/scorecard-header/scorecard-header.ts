import { Component, Input, OnChanges } from '@angular/core';
import { KpiHeader } from '../../app/models/scorecard-header.model';
@Component({
  selector: 'scorecard-header',
  templateUrl: 'scorecard-header.html'
})
export class ScorecardHeaderComponent implements OnChanges {
  @Input() kpiHeaders: KpiHeader[];

  constructor() {}

  ngOnChanges() {
  }
}
