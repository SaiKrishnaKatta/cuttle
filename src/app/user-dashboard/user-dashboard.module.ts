import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CollateralInjectionComponent } from './collateral-injection/collateral-injection.component';
import { ModalModule } from "ngx-bootstrap/modal";
import { ActiveCardComponent } from './active-card/active-card.component';
import { WalletsComponent } from './wallets/wallets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReceiveComponent } from './receive/receive.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    CollateralInjectionComponent,
    WalletsComponent,
    ActiveCardComponent,
    ReceiveComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class UserDashboardModule { }
