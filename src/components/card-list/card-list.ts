import { Component, Input } from '@angular/core';
import { CardList } from '../../app/models/card-list.model';

@Component({
  selector: 'card-list',
  templateUrl: 'card-list.html'
})
export class CardListComponent {
  @Input() card: CardList;


  constructor() {}
}
