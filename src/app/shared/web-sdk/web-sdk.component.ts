import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { WebSDKService } from '../../auth/webSDK.sevice';
import { SharedModule } from '../shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-web-sdk',
  standalone: true,
  imports: [SharedModule, ModalModule],
  templateUrl: './web-sdk.component.html',
  styleUrl: './web-sdk.component.scss',
})
export class WebSDKComponent implements OnInit, OnDestroy {

  constructor(
    private webSdkService: WebSDKService,
  ) {}

  ngOnInit(): void {
    this.webSdkService.launchWebSdk(
      window.history.state.sdkToken,
      '',
      window.history.state.phone,
      'en'
    );
  }

  ngOnDestroy(): void {
  }
}
