import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as config from '../../app.config.json';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }


  getCreditBalance(req: any): Observable<any> {
    const url = environment.apiBase + config.CREDIT_BALANCE_URL;
    return this.http.post(url, req);
  }

  getProfileData(req: any): Observable<any> {
    const url = environment.apiBase + config.GET_PROFILE_DATA_URL;
    return this.http.post(url, req);
  }
}
