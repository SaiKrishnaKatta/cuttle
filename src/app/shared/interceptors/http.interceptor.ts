import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncryptService } from '../../services/common/encrypt.service';
import { catchError, finalize } from 'rxjs';
import { AngularDeviceInformationService } from 'angular-device-information';

@Injectable({
    providedIn: 'root'
})
export class ReqResInterceptor implements HttpInterceptor {

  constructor(
    private encryptService: EncryptService,
    private deviceInfoService: AngularDeviceInformationService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);
    this.encryptService.onEncrypt(req).subscribe((encrypted) => {
        req = encrypted;
    })
  
    console.log(req, this.deviceInfoService.getDeviceInfo());
    return next.handle(req).pipe(
        finalize(() => {
            console.log(req);
        }))
  }
}