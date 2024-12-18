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

  onLockCard(req: any): Observable<any> {
    const url = environment.apiBase + config.LOCK_CARD_URL;
    return this.http.post(url, req);
  }

  onUnLockCard(req: any): Observable<any> {
    const url = environment.apiBase + config.UNLOCK_CARD_URL;
    return this.http.post(url, req);
  }
  
  getCardSensitiveInfo(req: any): Observable<any> {
    const url = environment.apiBase + config.GET_CARD_SENSITIVE_INFO_URL;
    return this.http.post(url, req);
  }

  getCardList(): Observable<any> {
    const url = environment.apiBase + config.GET_CARD_LISTS;
    return this.http.post(url, {});
  }

  activateCard(req: any): Observable<any> {
    const url = environment.apiBase + config.ACTIVATE_CARD_URL;
    return this.http.post(url, req);
  } 

}
