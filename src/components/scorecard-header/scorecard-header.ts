import { Component, Input } from '@angular/core';
import { KpiHeader } from '../../app/models/scorecard-header.model';
@Component({
  selector: 'scorecard-header',
  templateUrl: 'scorecard-header.html'
})
export class ScorecardHeaderComponent {
  @Input() kpiHeaders: KpiHeader[];

  constructor() {}
}
