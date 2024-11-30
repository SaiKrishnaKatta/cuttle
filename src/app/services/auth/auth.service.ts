import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../app.config.json';
import { environment } from '../../../assets/environments/environment';
import { Observable } from 'rxjs';
import { AngularDeviceInformationService } from 'angular-device-information';
import { ReqMetadata } from '../../models/metadata.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  metaData: ReqMetadata = {};
  constructor(
    private http: HttpClient,
    private deviceInfoService: AngularDeviceInformationService
  ) {}

  getDeviceInfo() {
    if (!Object.keys(this.metaData).length) {
      this.metaData = this.deviceInfoService.getDeviceInfo();
    }
    return this.metaData;
  }

  onLogin(req: any): Observable<any> {
    const url = environment.apiBase + config.LOGIN_URL;
    req['metadata'] = this.getDeviceInfo(); 
    return this.http.post(url, req);
  }

  onSignUp(req: any): Observable<any> {
    const url = environment.apiBase + config.SIGN_UP_URL;
    req['metadata'] = this.getDeviceInfo(); 
    return this.http.post(url, req);
  }

  resetPassword(req: any): Observable<any> {
    const url = environment.apiBase + config.RESET_PASSWORD_URL;
    req['metadata'] = this.getDeviceInfo(); 
    return this.http.post(url, req);
  }
}
