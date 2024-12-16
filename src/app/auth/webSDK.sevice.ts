import { Injectable } from "@angular/core";
import snsWebSdk from '@sumsub/websdk';

@Injectable({
  providedIn: 'root'
})
export class WebSDKService {

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
        theme: 'dark'
      })
      .withOptions({ addViewportTag: false, adaptIframeHeight: true })
      // see below what kind of messages WebSDK generates
      .on('idCheck.onStepCompleted', (payload: any) => {
        console.log('onStepCompleted', payload);
      })
      .on('idCheck.onError', (error: any) => {
        console.log('onError', error);
      })
      .onMessage((type, payload) => {
        console.log("onMessage", type, payload);
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
}