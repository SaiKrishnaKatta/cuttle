import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as config from '../../app.config.json';
import { environment } from '../../../assets/environments/environment';
import { Observable } from 'rxjs';
import { AngularDeviceInformationService } from 'angular-device-information';
import { ReqMetadata } from '../../models/metadata.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private deviceInfoService: AngularDeviceInformationService
  ) {}

  onLogin(req: any): Observable<any> {
    const url = environment.apiBase + config.LOGIN_URL;
    console.log(this.deviceInfoService.getDeviceInfo());
    const metadata: ReqMetadata = this.deviceInfoService.getDeviceInfo();
    req['metadata'] = metadata; 

    return this.http.post(url, req);
  }
}
