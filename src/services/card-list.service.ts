import { CardKpi } from '../app/models/card-list.model';
import { PMCSCORECARDDRILLDOWNDATA } from '../pages/pmc/data';

export class CardListService {

  public getKpiScoreCardData(kpi: CardKpi): any {
    const exp = new RegExp(kpi.name, 'i');
    return PMCSCORECARDDRILLDOWNDATA.find(scorecard => exp.test(scorecard.name));
  }
}
