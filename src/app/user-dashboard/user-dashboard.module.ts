import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CollateralInjectionComponent } from './collateral-injection/collateral-injection.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    CollateralInjectionComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule
  ]
})
export class UserDashboardModule { }
