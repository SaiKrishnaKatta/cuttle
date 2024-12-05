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
    this.metaData = this.deviceInfoService.getDeviceInfo();
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
