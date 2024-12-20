import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as config from '../../app.config.json';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  constructor(
    private http: HttpClient
  ) { }

  getWalletBalance(): Observable<any> {
    const url = environment.apiBase + config.GET_WALLET_BALANCE_URL;
    return this.http.post(url, {});
  } 

  getWallets(): Observable<any> {
    const url = environment.apiBase + config.GET_WALLETS_URL;
    return this.http.post(url, {});
  } 
}
