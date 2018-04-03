import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';
import { SocialSharing } from '@ionic-native/social-sharing';
import {
  ModalController,
  ActionSheetController,
  AlertController
} from 'ionic-angular';
import { CardList, CardKpi } from '../../app/models/card-list.model';
import { PmcScorecardPage } from '../../pages/pmc/pmc-scorecard/pmc-scorecard';
import { CardListService } from '../../services/card-list.service';
import { NativeService } from '../../services/native.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html'
})
export class CardListComponent implements OnChanges {
  @Input() card: CardList;
  @Input() favorited = false;
  @Input() partOfKpiFavoritesList = false;
  @Output() removedCard: EventEmitter<CardList[]> = new EventEmitter<CardList[]>();
  @Output() removedKpi: EventEmitter<CardKpi[]> = new EventEmitter<CardKpi[]>();

  private cardIconName: string;
  private kpiIconName = 'star-outline';
  private toggle = false;
  private wholeCardFavorited = false;

  constructor(
    private modalCtrl: ModalController,
    private cardList: CardListService,
    private actionCtrl: ActionSheetController,
    private callNumber: CallNumber,
    private alertCtrl: AlertController,
    private emailComposer: EmailComposer,
    private socialSharing: SocialSharing,
    private nativeService: NativeService,
    private favoritesService: FavoritesService
  ) {}

  ngOnChanges() {
    this.cardIconName = this.favorited ? 'ios-trash-outline' : this.setCardIcon();
    if (this.favorited) {
      this.kpiIconName = this.partOfKpiFavoritesList ? 'ios-trash-outline' : '';
    }
  }

  ngOnInit() {
    this.subscribeToFavCardLists();
  }

  private subscribeToFavCardLists(): void {
    this.favoritesService.$favCardLists.subscribe((cardLists: CardList[]) => {
      this.wholeCardFavorited = cardLists.indexOf(this.card) > -1 ? true : false;
      this.setCardIcon();
    });
  }

  private loadCardOverview(kpi: CardKpi): void {
    const data = this.cardList.getKpiScoreCardData(kpi);
    if (data) {
      const modal = this.modalCtrl.create(PmcScorecardPage, data);
      modal.present();
    }
  }

  private onSelectManagerImage(): void {
    const { managerName, managerPhoneNumber, managerEmail } = this.card;
    const actionSheet = this.nativeService.createActionSheet(managerName, managerPhoneNumber, managerEmail);
    actionSheet.present();
  }

  private onToggleCardIcon(card: CardList): void {
    this.toggle = !this.toggle;
    this.toggle ? this.addToCardList(card) : this.removeFromCardList(card);
  }

  private addToCardList(card: CardList): void {
    this.favoritesService.addToCardLists(card);
    this.wholeCardFavorited = true;
    this.setCardIcon();
  }

  private removeFromCardList(card: CardList): void {
    if (card.title === 'Kpis') {
      this.card.kpis.forEach(kpi => this.favoritesService.removeFromKpiList(kpi));
      this.getAndEmitKpis();
    } else {
      this.favoritesService.removeFromCardLists(card);
      const cardList = this.favoritesService.getCardLists();
      this.removedCard.emit(cardList);
    }
    this.wholeCardFavorited = false;
    this.setCardIcon();
  }

  private onToggleKpi(kpi: CardKpi): void {
    kpi.clicked = !kpi.clicked;
    kpi.clicked ? this.addKpiToFavorites(kpi) : this.removeKpiFromFavorites(kpi);
  }

  private addKpiToFavorites (kpi: CardKpi): void {
    this.favoritesService.addToKpiList(kpi);
  }

  private removeKpiFromFavorites(kpi: CardKpi): void {
    this.favoritesService.removeFromKpiList(kpi);
    this.getAndEmitKpis();
  }

  private getAndEmitKpis(): void {
    const kpis = this.favoritesService.getKpis();
    this.removedKpi.emit(kpis);
  }

  private setCardIcon = (): string => this.cardIconName = this.setIcon(this.wholeCardFavorited);
  private setKpiIcon = (kpi: CardKpi): string =>  this.setIcon(kpi.clicked);
  private setIcon = (metric: any): string => metric ? 'star' : 'star-outline';
  private setArrowDirection = (direction: string): string => direction === 'down' ? 'md-arrow-dropdown' : 'md-arrow-dropup';
}
