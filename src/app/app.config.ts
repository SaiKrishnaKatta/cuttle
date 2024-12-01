import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ReqResInterceptor } from './shared/interceptors/http.interceptor';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { AngularDeviceInformationService } from 'angular-device-information';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    HttpClientModule,
    AngularDeviceInformationService
  ],
};
