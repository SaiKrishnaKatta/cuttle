import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { FeatureComponent } from './feature/feature.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FundSecurityComponent } from './fund-security/fund-security.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    ClientsComponent,
    FeatureComponent,
    CreditCardComponent,
    FundSecurityComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class LandingModule { }
