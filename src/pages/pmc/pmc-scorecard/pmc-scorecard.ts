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
  public scorecardHeaders: string[];
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

  public onDismiss = (): Promise<any> => this.viewCtrl.dismiss();
  public getBackground = (): string => this.settingsService.getBackground();
  public getTextColor = (): string => this.settingsService.getTextColor();
}
