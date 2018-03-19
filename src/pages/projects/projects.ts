import { Component, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { echartsData, echartsData2, PROJECTSSUMMARY, PROJECTSHSE, CURRENTPROJECTS } from './data';
import { CardList } from '../../app/models/card-list.model';
import { Project } from '../../app/models/project.model';
import { DrilldownPage } from '../drilldown/drilldown';
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

  constructor(private modalCtrl: ModalController) {}

  ionViewDidLoad() {}

  ngOnInit() {
    this.echartsData = echartsData;
    this.echarts2Data = echartsData2;
    this.setProjects();
  }

  setProjects() {
    this.projectsSummary = PROJECTSSUMMARY;
    this.projectsHse = PROJECTSHSE;
    this.currentProjects = CURRENTPROJECTS;
  }

  activateDrilldown(event: any) {
    this.loadProjectByName(event.data.name);
    const modal = this.modalCtrl.create(DrilldownPage, this.selectedProject);
    modal.present();
  }

  loadProjectByName(name: string) {
    const exp = new RegExp(name, 'i');
    this.selectedProject = this.currentProjects.find(project => exp.test(project.name));
  }
}
