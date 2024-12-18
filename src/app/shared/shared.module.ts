import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from  'ngx-ui-loader';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [HeaderComponent, FaqComponent, FooterComponent, LoaderComponent],
  imports: [
    CommonModule, 
    NgxLoadingModule,
    NgbModule
  ],
  exports: [HeaderComponent, FaqComponent, FooterComponent, LoaderComponent]
})
export class SharedModule { }
