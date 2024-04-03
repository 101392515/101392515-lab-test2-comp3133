import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  missionList: Mission[]=[];
  selectedMission: any | null = null;


  constructor(private spacexAPI: SpacexapiService) { }

  ngOnInit(): void {
    this.getMissionList();
  }

  getMissionList() {
    this.spacexAPI.getLaunches().subscribe(res => {
      this.missionList = res;
    })
  }

  selectMission(mission: any): void {
    this.selectedMission = mission;
    console.log(this.selectedMission)
  }


}
