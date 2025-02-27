import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-mission-filter',
  templateUrl: './mission-filter.component.html',
  styleUrls: ['./mission-filter.component.css']
})
export class MissionFilterComponent implements OnInit {
  missions: Mission[] = []; 
  filteredMissions: Mission[] = []; 
  launchYears = [2006, 2007, 2008, 2009, 2010,2011,2012,2013,2014,2015,2016,2017,2018,2019];

  constructor(private spacexAPI: SpacexapiService) {}

  ngOnInit() {
    this.loadAllMissions();
  }

  loadAllMissions() {
    this.spacexAPI.getLaunches().subscribe(res => {
      this.missions = res;
      this.filteredMissions = res; 
    });
  }

  filterByYear(year: number) {
    this.filteredMissions = this.missions.filter((m:any) => m.launch_year === year.toString());
  }

  filterBySuccess(success: boolean) {
    this.filteredMissions = this.missions.filter((m:any) => m.launch_success === success);
  }

}
