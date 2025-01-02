import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as config from '../../app.config.json';

@Injectable({
  providedIn: 'root',
})
export class WalletsService {
  constructor(private http: HttpClient) {}

  getWalletBalance(): Observable<any> {
    const url = environment.apiBase + config.GET_WALLET_BALANCE_URL;
    return this.http.post(url, {});
  }

  getWallets(): Observable<any> {
    const url = environment.apiBase + config.GET_WALLETS_URL;
    return this.http.post(url, {});
  }

  getDepositAddress(req: any): Observable<any> {
    const url = environment.apiBase + config.DEPOSIT_ADDRESS_URL;
    return this.http.post(url, req);
  }

  generateQRCode(req: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Accept', 'image/png');
    const url = environment.apiBase + config.GENERATE_QR_IMAGE_URL;
    return this.http.post(url, req, {responseType: 'blob'});
  }

  onDownloadQR(url: any) {
    return this.http.get(url);
  }
}
