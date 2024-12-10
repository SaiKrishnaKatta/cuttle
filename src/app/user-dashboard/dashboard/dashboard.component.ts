import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { CreditCardData } from '../../models/creditcard';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  credData: CreditCardData = {};
  lockedCard: boolean = false;
  unLockedCard: boolean = true;
  constructor(
    private route: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getCreditBalance();
  }

  onCollateralInj() {
    this.route.navigate(['/dashboard/collateral-injection'])
  }

  getCreditBalance() {
    const payload = {
      "cardId": "1490"
    }
    this.dashboardService.getCreditBalance(payload).subscribe((res) => {
      console.log(res.body.data);
      this.credData = res.body.data ? res.body.data : {};
    }, (err) => {console.error(err)});
  }

  onLockCard() {
    const payload = {
      "cardId": "1490"
    }
    if (this.unLockedCard) {
      this.dashboardService.onLockCard(payload).subscribe((res) => {
        console.log(res.body.data);
        if (res.body.status === '200') {
          this.lockedCard = true;
        }
      }, (err) => {console.error(err)});
    } else if (this.lockedCard) {
      this.dashboardService.onUnLockCard(payload).subscribe((res) => {
        console.log(res.body.data);
        if (res.body.status === '200') {
          this.unLockedCard = true;
        }
      }, (err) => {console.error(err)});
    }
  }

  getCardSensitiveInfo() {
    const payload = {
      "cardId": "1490",
      "ip": "127.0.0.1"
    }
    this.dashboardService.getCardSensitiveInfo(payload).subscribe((res) => {
      console.log(res.body.data);
      if (res.body.status === '200') {
        this.unLockedCard = true;
      }
    }, (err) => {console.error(err)});
  }

  getAllCardLists() {
    const payload = {
      "cardId": "1490",
      "ip": "127.0.0.1"
    }
    this.dashboardService.getCardList(payload).subscribe((res) => {
      console.log(res.body.data);
      if (res.body.status === '200') {
        this.unLockedCard = true;
      }
    }, (err) => {console.error(err)});
  }
}
