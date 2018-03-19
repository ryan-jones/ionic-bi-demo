import { CardKpi } from '../app/models/card-list.model';
import { PMCSCORECARDDRILLDOWNDATA } from '../pages/pmc/data';

export class CardListService {

  getKpiScoreCardData(kpi: CardKpi) {
    const exp = new RegExp(kpi.name, 'i');
    return PMCSCORECARDDRILLDOWNDATA.find(scorecard => exp.test(scorecard.name));
  }
}
