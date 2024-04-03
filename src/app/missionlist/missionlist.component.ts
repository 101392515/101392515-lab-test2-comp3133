import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  @Input() missionList: Mission[]=[];

  @Output() selectMission = new EventEmitter<any>();

  constructor(private spacexAPI: SpacexapiService) { }

  ngOnInit(): void {
  }

  getMissionList() {
    this.spacexAPI.getLaunches().subscribe(res => {
      this.missionList = res;
    })
  }

  onSelectMission(mission: any): void {
    this.selectMission.emit(mission);
  }
}
