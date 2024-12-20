import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.scss'
})
export class WalletsComponent {
  constructor(
      private route: Router,
      // private dashboardService: DashboardService,
      // private deviceInfoService: AngularDeviceInformationService
    ) {}
  onReceive() {
    this.route.navigate(['/dashboard/receive'])
  }
}
