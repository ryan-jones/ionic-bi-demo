import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsService } from '../../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-pmc-scorecard',
  templateUrl: 'pmc-scorecard.html',
})
export class PmcScorecardPage implements AfterViewInit, OnInit {
  private scorecard: any;
  private scorecardHeaders: any[];
  constructor(
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private cdr: ChangeDetectorRef,
    private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.scorecard = this.navParams.data;

  }

  ngAfterViewInit() {
    if (this.scorecard.tableData) {
      this.scorecardHeaders = Object.keys(this.scorecard.tableData[0]);
    }
    this.cdr.detectChanges();
  }

  setColor(element: any, header: string) {
    if (header !== 'Element') {
      const number = Math.random();
      return number > 0.5 ? '#91c675' : 'f94646';
    }
  }

  onDismiss = () => this.viewCtrl.dismiss();
  getBackground = () => this.settingsService.getBackground();
  getTextColor = () => this.settingsService.getTextColor();
}
