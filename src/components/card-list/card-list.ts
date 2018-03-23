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
  @Output() removedKpi: EventEmitter<any> = new EventEmitter<any>();

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

  subscribeToFavCardLists() {
    this.favoritesService.$favCardLists.subscribe((cardLists: CardList[]) => {
      this.wholeCardFavorited = cardLists.indexOf(this.card) > -1 ? true : false;
      this.setCardIcon();
    });
  }

  loadCardOverview(kpi: CardKpi) {
    const data = this.cardList.getKpiScoreCardData(kpi);
    const modal = this.modalCtrl.create(PmcScorecardPage, data);
    modal.present();
  }

  onSelectManagerImage() {
    const { managerName, managerPhoneNumber, managerEmail } = this.card;
    const actionSheet = this.nativeService.createActionSheet(managerName, managerPhoneNumber, managerEmail);
    actionSheet.present();
  }

  onToggleCardIcon = (card) => {
    this.toggle = !this.toggle;
    this.toggle ? this.addToCardList(card) : this.removeFromCardList(card);
  }

  addToCardList = (card: CardList) => {
    this.favoritesService.addToCardLists(card);
    this.wholeCardFavorited = true;
    this.setCardIcon();
  }

  removeFromCardList = (card: CardList) => {
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

  onToggleKpi = (kpi) => {
    kpi.clicked = !kpi.clicked;
    kpi.clicked ? this.addKpiToFavorites(kpi) : this.removeKpiFromFavorites(kpi);
  }

  addKpiToFavorites = (kpi: CardKpi) => {
    this.favoritesService.addToKpiList(kpi);
  }

  removeKpiFromFavorites(kpi) {
    this.favoritesService.removeFromKpiList(kpi);
    this.getAndEmitKpis();
  }

  getAndEmitKpis() {
    const kpis = this.favoritesService.getKpis();
    this.removedKpi.emit(kpis);
  }

  setCardIcon = () => this.cardIconName = this.wholeCardFavorited ? 'star' : 'star-outline';
  setKpiIcon = (kpi) =>  kpi.clicked ? 'star' : 'star-outline';
  setArrowDirection = (direction: string) => direction === 'down' ? 'md-arrow-dropdown' : 'md-arrow-dropup';
}
