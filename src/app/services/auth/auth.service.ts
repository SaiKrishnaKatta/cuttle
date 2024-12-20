import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as config from '../../app.config.json';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AngularDeviceInformationService } from 'angular-device-information';
import { ReqMetadata } from '../../models/metadata.model';
import { OTPRequest } from '../../models/otpRequest.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  metaData: ReqMetadata = {};
  constructor(
    private http: HttpClient,
    private deviceInfoService: AngularDeviceInformationService
  ) {}

  onLogin(req: any): Observable<any> {
    const url = environment.apiBase + config.LOGIN_URL;
    return this.http.post(url, req);
  }

  onSignUp(req: any): Observable<any> {
    const url = environment.apiBase + config.SIGN_UP_URL;
    return this.http.post(url, req);
  }

  resetPassword(req: any): Observable<any> {
    const url = environment.apiBase + config.RESET_PASSWORD_URL;
    return this.http.post(url, req);
  }

  sendOtp(req: OTPRequest, type: string): Observable<any> {
    const url = environment.apiBase + config.SEND_OTP_URL;
    req.destinationType = type;
    return this.http.post(url, req);
  }

  verifyOtp(req: OTPRequest, type: string): Observable<any> {
    const url = environment.apiBase + config.VERIFY_OTP_URL;
    req.verificationType = type;
    delete req.destinationType;
    return this.http.post(url, req);
  }

  generateKYCToken(): Observable<any> {
    const token = sessionStorage.getItem('userId') || '';
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('userId', token);
    const url = environment.apiBase + config.GET_ACCESS_TOKEN_URL;
    return this.http.get(url, { headers });
  }

  onPostKYC(req: any): Observable<any> {
    const url = environment.apiBase + config.POST_KYC_URL;
    return this.http.post(url, req);
  }

  getCountries() {
    const url = environment.apiBase + config.GET_COUNTRIES_URL;
    return this.http.post(url, {});
  }
}
