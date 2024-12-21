import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WalletsService } from '../../services/wallets/wallets.service';
import { WalletInfo } from '../../models/wallet';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.scss'
})


export class WalletsComponent implements OnInit {

  balanceAmt: string = '';
  wallets: Array<WalletInfo> = [];

  constructor(
    private route: Router,
    private walletsService: WalletsService
  ) {}

  onReceive() {
    this.route.navigate(['/dashboard/receive'])
  }

  ngOnInit(): void {
    this.getAllWallets();
    this.getWalletBalance();
  }

  getWalletBalance() {
    this.walletsService.getWalletBalance().subscribe((res) => {
      this.balanceAmt = res.data.totalBalanceInHKD ? res.data.totalBalanceInHKD : 0;
    }, (error) => {
      console.error(error);
    })
  }

  getAllWallets() {
    this.walletsService.getWallets().subscribe((res) => {
      this.wallets = res.data.length ? res.data : [];
    }, (error) => {
      console.error(error);
    })
  }
}
