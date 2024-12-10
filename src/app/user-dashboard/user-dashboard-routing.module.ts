import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';
import { CollateralInjectionComponent } from './collateral-injection/collateral-injection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveCardComponent } from './active-card/active-card.component';

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
        path: 'active-card',
        component: ActiveCardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
