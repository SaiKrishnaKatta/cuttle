import { Component } from '@angular/core';
import { Router } from 'express';
import { CommonService } from '../../services/common/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // isLoggedInUser: boolean = false;
  // constructor(public route: Router, private commonService: CommonService) {}

  // ngOnInit(): void {
  //   this.commonService.isUserLoggedInSub.subscribe((res) => {
  //     this.isLoggedInUser = res;
  //   });
  // }
  // onAboutUs() {
  //   if (document.getElementById('aboutUs')) {
  //     document.getElementById('aboutUs')?.scrollIntoView();
  //   }
  // }
  // redirectTo(routeTo: string) {
  //   this.route.navigate([routeTo]);
  // }
}
