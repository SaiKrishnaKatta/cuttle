import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncryptService } from '../../services/common/encrypt.service';
import { catchError, finalize } from 'rxjs';
import { AngularDeviceInformationService } from 'angular-device-information';
import { ReqMetadata } from '../../models/metadata.model';
import { CommonService } from '../../services/common/common.service';

@Injectable({
  providedIn: 'root',
})
export class ReqResInterceptor implements HttpInterceptor {
  metaData: ReqMetadata = {};
  constructor(
    private deviceInfoService: AngularDeviceInformationService,
    private commonService: CommonService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.commonService.isLoaderOn.next(true);
    this.metaData = this.deviceInfoService.getDeviceInfo();
    req = req.clone({
      body: { ...req.body, metadata: this.metaData },
    });
    return next.handle(req).pipe(
      finalize(() => {
        this.commonService.isLoaderOn.next(false);
      })
    );
  }
}
