import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getProfileData();
    this.getCreditBalance();
  }

  getProfileData() {
    const payload = {};
    this.dashboardService.getProfileData(payload).subscribe((res) => {
      console.log(res);
    }, (err) => {console.error(err)})
  }

  getCreditBalance() {
    const payload = {
      "cardId": "1490"
    }
    this.dashboardService.getCreditBalance(payload).subscribe((res) => {
      console.log(res);
    }, (err) => {console.error(err)})
  }

  onCollateralInj() {
    this.route.navigate(['/dashboard/collateral-injection'])
  }
}
