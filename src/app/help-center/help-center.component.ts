import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.scss'
})
export class HelpCenterComponent {

}
