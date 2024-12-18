import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';
import { ProfileData } from '../../models/profileData';
import { CompanyConstants } from '../../models/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Input() profileData: ProfileData = {};
  isLoggedInUser: boolean = false;
  companyData = CompanyConstants;
  constructor(public route: Router, private commonService: CommonService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.isLoggedInUser = true;
  } else {
    this.commonService.isUserLoggedInSub.subscribe((res) => {
      this.isLoggedInUser = res;
    });
  }
  }
  onAboutUs() {
    if (document.getElementById('aboutUs')) {
      document.getElementById('aboutUs')?.scrollIntoView();
    }
  }
  redirectTo(routeTo: string) {
    this.route.navigate([routeTo]);
  }
}
