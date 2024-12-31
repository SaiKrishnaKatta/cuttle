import { Injectable, Injector, ViewChild } from '@angular/core';
import snsWebSdk from '@sumsub/websdk';
import { StatusModalComponent } from '../shared/status-modal/status-modal.component';
import { AuthService } from '../services/auth/auth.service';
import { CustomModalOptions } from '../models/modal-options';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WebSDKService {
  applicationId: any;
  bsModalRef?: BsModalRef;

  constructor(
    public modalService: BsModalService,
    private authService: AuthService,
    private route: Router
  ) {}

  /**
   * @param accessToken - access token that you generated on the backend
   * @param applicantEmail - applicant email (not required)
   * @param applicantPhone - applicant phone (not required)
   * @param customI18nMessages - customized locale messages for current session (not required)
   */
  launchWebSdk(
    accessToken: any,
    applicantEmail: any,
    applicantPhone: any,
    customI18nMessages: any
  ) {
    let snsWebSdkInstance = snsWebSdk
      .init(
        accessToken,
        // token update callback, must return Promise
        // Access token expired
        // get a new one and pass it to the callback to re-initiate the WebSDK
        () => this.getNewAccessToken()
      )
      .withConf({
        lang: 'en', //language of WebSDK texts and comments (ISO 639-1 format)
        email: applicantEmail,
        phone: applicantPhone,
        theme: 'dark',
      })
      .withOptions({ addViewportTag: false, adaptIframeHeight: true })
      // see below what kind of messages WebSDK generates
      .on('idCheck.onStepCompleted', (payload: any) => {
        console.log('onStepCompleted', payload);
      })
      .on('idCheck.onError', (error: any) => {
        console.log('onError', error);
        setTimeout(() => {
          document.getElementById('sumsub-websdk-container')?.remove();
          this.route.navigate(['auth/register']);
        }, 3000);
      })
      .onMessage((type, payload: any) => {
        console.log('onMessage', type, payload);
        if (type === 'idCheck.onApplicantLoaded') {
          this.applicationId = payload.applicantId;
        }
        if (type === 'idCheck.onApplicantStatusChanged') {
          const modalOptions = { status: payload?.reviewResult?.reviewAnswer };
          if (
            payload.reviewStatus === 'completed' &&
            payload.reviewResult.reviewAnswer === 'RED'
          ) {
            this.openModal(modalOptions);
          }
          if (
            payload.reviewStatus === 'completed' &&
            payload.reviewResult.reviewAnswer === 'GREEN'
          ) {
            this.authService
              .onPostKYC({ applicantId: this.applicationId })
              .subscribe((res) => {
                console.log('POST KYC', res);
                this.openModal(modalOptions);
              });
          }
        }
      })
      .build();

    // you are ready to go:
    // just launch the WebSDK by providing the container element for it
    snsWebSdkInstance.launch('#sumsub-websdk-container');
  }

  getNewAccessToken() {
    const newAccessToken = '';
    return Promise.resolve(newAccessToken); // get a new token from your backend
  }

  openModal(options: CustomModalOptions) {
    const config: ModalOptions = {
      backdrop: 'static',
      keyboard: false,
      animated: true,
      ignoreBackdropClick: true,
      initialState: {
        modalOptions: options,
      }
    };
    this.modalService.show(StatusModalComponent, config);
  }

  getModalRef() {
    return this.bsModalRef;
  }
}
