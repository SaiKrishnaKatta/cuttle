import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';
import { CompanyConstants } from '../../models/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isLoggedInUser: boolean = false;
  companyData = CompanyConstants;
  constructor(public route: Router, private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.isUserLoggedInSub.subscribe((res) => {
      this.isLoggedInUser = res;
    });
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
