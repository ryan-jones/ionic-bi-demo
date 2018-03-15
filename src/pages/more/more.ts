import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinancePage } from '../finance/finance';
import { ProjectsPage } from '../projects/projects';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  private financePage = FinancePage;
  private projectsPage = ProjectsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
