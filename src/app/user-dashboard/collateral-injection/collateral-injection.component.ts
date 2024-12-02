import { Component } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { CollateralModalComponent } from '../collateral-modal/collateral-modal.component';

@Component({
  selector: 'app-collateral-injection',
  templateUrl: './collateral-injection.component.html',
  styleUrl: './collateral-injection.component.scss'
})
export class CollateralInjectionComponent {

  bsModalRef?: BsModalRef;
  constructor(
    private modalService: BsModalService
  ) {}

  showModal(type: string) {
    const config = {
      class: 'modal-dialog-centered',
      initialState: {
        type: type
      },
    };
    this.bsModalRef = this.modalService.show(CollateralModalComponent, config);
  }
}
