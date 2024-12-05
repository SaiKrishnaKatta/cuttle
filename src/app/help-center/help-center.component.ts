import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CommonService } from '../services/common/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {
  constructor(
    private route: Router,
  ) {}
  redirectToHome(){
    this.route.navigate(['/landing']);
  }
}
