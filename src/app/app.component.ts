import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cuttle-app';
  isLoaderOn: boolean = false;

  constructor(
    private commonService: CommonService
  ) {
    this.commonService.isLoaderOn.subscribe((res) => {
      if (res) {
        this.isLoaderOn = res;
      }
    })
  }

  ngOnInit(): void {}
}
