import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {
  SAFETYSCORETRENDS,
  PROFITABILITYSCORETRENDS,
  ABCGASTRENDS,
  TRENDSDRILLDOWN,
  PMCSCORECARDS
} from './data';
import { PMCDrilldownPage } from './pmc-drilldown/pmc-drilldown';
import { CardList } from '../../app/models/card-list.model';

@IonicPage()
@Component({
  selector: 'page-pmc',
  templateUrl: 'pmc.html'
})
export class PmcPage implements OnInit {
  private abcGasScoreTrends: any;
  private safetyScoreTrends: any;
  private profitabilityScoreTrends: any;
  private pmcScorecards: CardList;


  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtr: ModalController) {}

  ngOnInit() {
    this.setAbcGasScoreTrends();
    this.setProfitabilityScoreTrends();
    this.setSafetyScoreTrends();
    this.setPmcScorecards();
  }

  setAbcGasScoreTrends = () => this.abcGasScoreTrends = ABCGASTRENDS;

  setSafetyScoreTrends = () => this.safetyScoreTrends = SAFETYSCORETRENDS;

  setProfitabilityScoreTrends = () => this.profitabilityScoreTrends = PROFITABILITYSCORETRENDS;

  setPmcScorecards = () => this.pmcScorecards = PMCSCORECARDS;

  activateDrilldown({ seriesName, name }) {
    const drilldownData = { ...this.loadScore(seriesName, name),  name: seriesName };
    const popover = this.modalCtr.create(PMCDrilldownPage, drilldownData);
    popover.present();
  }

  loadScore(seriesName: string, specifiedDate: string) {
    const exp = new RegExp(seriesName, 'i');
    return TRENDSDRILLDOWN.find(kpi => exp.test(kpi.name));
  }
}
