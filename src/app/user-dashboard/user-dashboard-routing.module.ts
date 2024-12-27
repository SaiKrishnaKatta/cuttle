import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { CollateralInjectionComponent } from './collateral-injection/collateral-injection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveCardComponent } from './active-card/active-card.component';
import { WalletsComponent } from './wallets/wallets.component';
import { ReceiveComponent } from './receive/receive.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children:[
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'collateral-injection',
        component: CollateralInjectionComponent
      },
      {
        path: 'wallets',
        component: WalletsComponent,
      },
      {
        path: 'receive',
        component: ReceiveComponent,
      },
      {
        path: 'active-card',
        component: ActiveCardComponent
      },
      {
        path: 'transaction-history',
        component: TransactionHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
