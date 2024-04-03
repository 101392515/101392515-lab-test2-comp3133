import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { } 

  getLaunches() : Observable<Mission[]>{
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  getLaunchesByYear(year: string) : Observable<Mission[]>{
    return this.http.get<Mission[]>(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }

  getFightByFightNumber(number: string) {
    return this.http.get('https://api.spacexdata.com/v3/launches/' +number);
  }
}
