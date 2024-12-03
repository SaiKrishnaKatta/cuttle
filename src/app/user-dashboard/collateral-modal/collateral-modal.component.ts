import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-collateral-modal',
  templateUrl: './collateral-modal.component.html',
  styleUrl: './collateral-modal.component.scss',
})
export class CollateralModalComponent implements OnInit {

  type: string = '';
  // copyText: string = 'copy this text';
  // copyToClipboard(){
  //   const copyTextField = document.getElementById('copyTextField') as HTMLInputElement;
  //   copyTextField.select();
  //   copyTextField.setSelectionRange(0, 99999); //For mobile devices
  //   navigator.clipboard.writeText(copyTextField.value).then(() => {
  //     alert('copied to clipboard');
  //   });
  // }
  constructor(
    private modalService: BsModalService
  ) {}

  ngOnInit() {
  }

  closedModal() {
    this.modalService.hide(1);
  }
}
