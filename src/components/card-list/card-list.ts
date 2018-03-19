import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CardList, CardKpi } from '../../app/models/card-list.model';
import { PmcScorecardPage } from '../../pages/pmc/pmc-scorecard/pmc-scorecard';
import { CardListService } from '../../services/card-list.service';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html'
})
export class CardListComponent {
  @Input() card: CardList;

  constructor(private modalCtrl: ModalController, private cardList: CardListService) {}

  setArrowDirection = (direction: string) => direction === 'down' ? 'md-arrow-dropdown' : 'md-arrow-dropup';

  loadCardOverview(kpi: CardKpi) {
    const data = this.cardList.getKpiScoreCardData(kpi);
    const modal = this.modalCtrl.create(PmcScorecardPage, data);
    modal.present();
  }
}
