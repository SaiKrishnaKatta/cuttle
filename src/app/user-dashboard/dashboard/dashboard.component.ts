import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { CreditCardData } from '../../models/creditcard';
import { CardDetails } from '../../models/cardList-response.model';
import { AngularDeviceInformationService } from 'angular-device-information';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  credData: CreditCardData = {};
  lockedCard: boolean = false;
  unLockedCard: boolean = true;
  cardDetails: CardDetails = {};
  cardID: number = 0;
  constructor(
    private route: Router,
    private dashboardService: DashboardService,
    private deviceInfoService: AngularDeviceInformationService
  ) {}

  ngOnInit(): void {
    this.getAllCardLists();
  }

  onCollateralInj() {
    this.route.navigate(['/dashboard/collateral-injection'])
  }

  onLockCard() {
    const payload = {
      cardId: this.cardID
    };
    if (this.unLockedCard) {
      this.dashboardService.onLockCard(payload).subscribe((res) => {
        console.log(res.body.data);
        if (res.body.status === 200) {
          this.lockedCard = true;
          this.unLockedCard = false;
        }
      }, (err) => {console.error(err)});
    } else if (this.lockedCard) {
      this.dashboardService.onUnLockCard(payload).subscribe((res) => {
        console.log(res.body.data);
        if (res.body.status === 200) {
          this.unLockedCard = true;
          this.lockedCard = false;
        }
      }, (err) => {console.error(err)});
    }
  }

  getCardSensitiveInfo() {
    const payload = {
      cardId: this.cardID,
      ip: '127.0.0.1',
    };
    this.dashboardService.getCardSensitiveInfo(payload).subscribe((res) => {
      console.log(res.body.data);
      if (res.body.status === 200) {
        this.unLockedCard = true;
      }
    }, (err) => {console.error(err)});
  }

  getAllCardLists() {
    this.dashboardService.getCardList().subscribe((res) => {
      console.log(res.body.data);
      if (res.body.status === 200) {
        this.cardDetails = res.body.data && res.body.data.length ? res.body.data[0] : {};
        this.unLockedCard = true;
        this.cardID = this.cardDetails.cardId || 0;
        this.getCreditBalance();
      }
    }, (err) => {console.error(err)});
  }

  getCreditBalance() {
    const payload = {
      cardId: this.cardID
    };
    this.dashboardService.getCreditBalance(payload).subscribe((res) => {
      console.log(res.body.data);
      this.credData = res.body.data ? res.body.data : {};
    }, (err) => {console.error(err)});
  }

  onActivateCard() {
    this.route.navigate(['dashboard/active-card']);
  }
}
