import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../../services/wallets/wallets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrl: './receive.component.scss',
})
export class ReceiveComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  downloadedTxt: any;
  downloadedImg: any;
  options = [
    {
      value: 1,
      label: 'option 1',
      imgSrc: '../../../assets/img/crypto_icon.png',
      heading: 'head1',
      description: 'Desc1',
    },
    {
      value: 2,
      label: 'option 2',
      imgSrc: '../../../assets/img/crypto_icon.png',
      heading: 'head2',
      description: 'Desc2',
    },
    {
      value: 3,
      label: 'option 3',
      imgSrc: '../../../assets/img/crypto_icon.png',
      heading: 'head3',
      description: 'Desc3',
    },
  ];

  constructor(
    private walletsService: WalletsService,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      coin: ['', Validators.required],
      network: ['', Validators.required],
    });
  }

  onGetAddress() {
    if (this.form.valid) {
      this.walletsService.getDepositAddress(this.form.value).subscribe(
        (res) => {
          console.log(res);
          if (res.status == 200) {
            this.downloadedTxt = res.data ? res.data : '';
            this.getQRCode();
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  getQRCode() {
    const payload = {
      text: this.downloadedTxt,
      width: 300,
      height: 300,
    };
    this.walletsService.generateQRCode(payload).subscribe(
      (res) => {
        this.downloadedImg = res;
        console.log(res);
      },
      (err) => {
        console.error(err);
        this.downloadedImg = err.error.text;
      }
    );
  }

  downloadQR() {
    var blob = new Blob([this.downloadedImg], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "depositQR.jpg");
  }
}
