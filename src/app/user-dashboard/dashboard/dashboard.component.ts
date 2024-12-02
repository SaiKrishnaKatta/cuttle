import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private route: Router
  ) {}

  onCollateralInj() {
    this.route.navigate(['/dashboard/collateral-injection'])
  }
}