import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent
  }

  // {
  //   path: '',
  //   component: CollateralInjectionComponent,
  //   children:[
  //     {
  //       path:'collateral-Injection',
  //       component: CollateralInjectionComponent
  //     },
  //     {
  //       path: '',
  //       redirectTo: 'collateral-Injection',
  //       pathMatch: 'full'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
