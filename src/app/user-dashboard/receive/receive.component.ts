import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../../services/wallets/wallets.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrl: './receive.component.scss',
})
export class ReceiveComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  downloadedTxt: any;
  downloadedImg: any;
  coins: any = [];
  netWorks: any = [];
  wallets: any = [];
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
    private _fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (window.history.state.wallets) {
      this.wallets = window.history.state.wallets;
      this.coins = this.wallets.map((w: any) => w.coinSymbol);
    } else {
      this.route.navigate(['/dashboard/wallets']);
    }
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
        this.downloadedImg = URL.createObjectURL(res);
      },
      (err) => {
        console.error(err);
        this.downloadedImg = err.error.text;
      }
    );
  }

  downloadQR() {
    saveAs(this.downloadedImg, 'depositQR.jpg');
  }

  onSelectCoin() {
    const selectedCoin = this.form.get('coin')?.value;
    this.netWorks = [];
    this.wallets.forEach((coin: any) => {
      if (coin.coinSymbol === selectedCoin) {
        this.netWorks = coin.network;
      }
    });
  }
}
