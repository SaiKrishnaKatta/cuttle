import {
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncryptService } from '../../services/common/encrypt.service';
import { catchError, finalize, map } from 'rxjs';
import { AngularDeviceInformationService } from 'angular-device-information';
import { ReqMetadata } from '../../models/metadata.model';
import { CommonService } from '../../services/common/common.service';

@Injectable({
  providedIn: 'root',
})
export class ReqResInterceptor implements HttpInterceptor {
  metaData: ReqMetadata = {};
  headers: HttpHeaders = new HttpHeaders({});

  constructor(
    private deviceInfoService: AngularDeviceInformationService,
    private commonService: CommonService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.commonService.isLoaderOn.next(true);
    // this.metaData = this.deviceInfoService.getDeviceInfo();
    this.metaData = {
      deviceType: 'OnePlus Nord2 5G',
      deviceVersion: 'OP515BL1',
      deviceToken: 'k6893v1_64_k419',
      deviceOS: 'Android',
      publicIp: '49.204.115.51',
      privateIp: '192.168.0.104',
      logitude: '80.2571232',
      latitude: '13.1393048',
      appVersion: '1.2.7',
      address:
        '13/17, Kadumbadi Amman Koil St, Chinnadimadam, Kodungaiyur, Chennai, Tamil Nadu 600118, India',
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      zipCode: '600118',
      accessPlateform: 'Mobile',
      carrier: 'Jio True5G',
      userAgent:
        'Mozilla/5.0 (Linux; Android 13; DN2101 Build/TP1A.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/123.0.6312.40 Mobile Safari/537.36',
      brand: 'OnePlus',
      model: 'DN2101',
    };
    const token = sessionStorage.getItem('token') || '';
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
      .set('token', token),
      body: { ...req.body, metadata: this.metaData },
    });
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          console.log(event)
          if (event && event.body.data && event.body.data.BearerToken) {
            sessionStorage.setItem('token', event.body.data.BearerToken);
          }
            // event = event.clone({ body: resolveReferences(event.body) })
        }         
        return event;
      }),
      finalize(() => {
        console.log(req)
        this.commonService.isLoaderOn.next(false);
      })
    );
  }
}
