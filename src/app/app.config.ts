import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ReqResInterceptor } from './shared/interceptors/http.interceptor';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AngularDeviceInformationService } from 'angular-device-information';
import { BsModalService } from 'ngx-bootstrap/modal';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    HttpClientModule,
    AngularDeviceInformationService,
    { provide: HTTP_INTERCEPTORS, useClass: ReqResInterceptor, multi: true},
    BsModalService
  ],
};
