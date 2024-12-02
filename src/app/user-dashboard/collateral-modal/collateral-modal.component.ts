import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-collateral-modal',
  templateUrl: './collateral-modal.component.html',
  styleUrl: './collateral-modal.component.scss',
})
export class CollateralModalComponent implements OnInit {

  type: string = '';
  constructor(
    private modalService: BsModalService
  ) {}

  ngOnInit() {
  }

  closedModal() {
    this.modalService.hide(1);
  }
}
