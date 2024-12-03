import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    public route: Router
  ) {  
  }
  onAboutUs() {
    if (document.getElementById('aboutUs')) {
      document.getElementById('aboutUs')?.scrollIntoView();
    }
  }
  redirectTo(){
    this.route.navigate(['/auth/login']);
  }
  redirectToRegister(){
    this.route.navigate(['/auth/register']);
  }
}
