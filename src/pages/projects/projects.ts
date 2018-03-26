import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { echartsData, echartsData2, PROJECTSSUMMARY, PROJECTSHSE, CURRENTPROJECTS } from './data';
import { CardList } from '../../app/models/card-list.model';
import { Project } from '../../app/models/project.model';
import { DrilldownPage } from './drilldown/drilldown';
import { AlertsPage } from '../alerts/alerts';
import { FavoritesService, SliderChart } from '../../services/favorites.service';
@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit {
  private echartsData: any;
  private echarts2Data: any;
  private projectsSummary: CardList;
  private projectsHse: CardList;
  private selectedProject: Project;
  private currentProjects: Project[];
  private alertsPage = AlertsPage;
  private charts: SliderChart;
  private toggle = false;
  private scoreCardsFavorited = false;
  private trendsIcon = 'star-outline';


  constructor(private modalCtrl: ModalController, private favoritesService: FavoritesService) {}

  ionViewDidLoad() {}

  ngOnInit() {
    this.subscribeToSliderCharts();
    this.echartsData = echartsData;
    this.echarts2Data = echartsData2;
    this.charts = { charts: [this.echartsData, this.echarts2Data] };
    this.setProjects();
  }

  subscribeToSliderCharts() {
    this.favoritesService.$favSliderCharts.subscribe((sliderCharts: SliderChart[]) => {
      this.scoreCardsFavorited = sliderCharts.indexOf(this.charts) > -1 ? true : false;
      this.setTrendsIcon();
    });
  }

  setProjects() {
    this.projectsSummary = PROJECTSSUMMARY;
    this.projectsHse = PROJECTSHSE;
    this.currentProjects = CURRENTPROJECTS;
  }

  activateDrilldown({ data }) {
    this.loadProjectByName(data.name);
    const modal = this.modalCtrl.create(DrilldownPage, this.selectedProject);
    modal.present();
  }

  loadProjectByName(name: string) {
    const exp = new RegExp(name, 'i');
    this.selectedProject = this.currentProjects.find(project => exp.test(project.name));
  }

  toggleTrendsIcon() {
    this.toggle = !this.toggle;
    this.toggle ? this.addToFavorites() : this.removeFromFavorites();
  }

  addToFavorites() {
    this.favoritesService.addToSliderCharts(this.charts);
    this.scoreCardsFavorited = true;
    this.setTrendsIcon();
  }

  removeFromFavorites() {
    this.favoritesService.removeFromSliderCharts(this.charts);
    this.scoreCardsFavorited = false;
    this.setTrendsIcon();
  }
  setTrendsIcon = () => this.trendsIcon = this.scoreCardsFavorited ? 'star' : 'star-outline';

}
