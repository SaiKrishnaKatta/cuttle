import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isLoggedInUser: boolean = false;
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
