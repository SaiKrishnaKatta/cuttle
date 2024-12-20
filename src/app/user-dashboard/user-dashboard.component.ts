import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { ProfileData } from '../models/profileData';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
  profileData: ProfileData = {};
  constructor(
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    const payload = {};
    this.dashboardService.getProfileData(payload).subscribe((res) => {
      this.profileData = res.data ? res.data : {};
    }, (err) => {console.error(err)})
  }


}
