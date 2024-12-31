import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CustomModalOptions } from '../../models/modal-options';
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { WebSDKService } from '../../auth/webSDK.sevice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-modal',
  standalone: true,
  imports: [CommonModule, ModalModule],
  providers: [BsModalService],
  templateUrl: './status-modal.component.html',
  styleUrl: './status-modal.component.scss'
})

export class StatusModalComponent implements OnInit {
  @ViewChild('successModal') successModal!: TemplateRef<any>;
  modalOptions: CustomModalOptions = new CustomModalOptions('');
  bsModalRef?: BsModalRef;
  constructor(
    private route: Router,
    private webSdkService: WebSDKService
  ) {}

  ngOnInit(): void {
  }

  openModal() {
  }

  onDone() {
    // this.bsModalRef = this.webSdkService.getModalRef();
    // this.bsModalRef?.hide();
    this.webSdkService.modalService.hide();
    const doc = document.querySelector('sumsub-websdk-container');
    doc?.classList.add('d-none');
    this.route.navigate(['auth/login']);
  }
}
