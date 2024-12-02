import { Component } from '@angular/core';
import { CommonService } from '../../services/common/common.service';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  isLoaderOn: boolean = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(private commonService: CommonService) {
    this.commonService.isLoaderOn.subscribe((res) => {
      this.isLoaderOn = res;
    });
  }
}
