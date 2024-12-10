import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { CommonService } from '../services/common/common.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export const authGuardGuard: CanActivateFn = (route, state) => {

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  redirectTo: string = '/auth';

  constructor(private commonService: CommonService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(state.url);
    if (this.commonService.userStatus()) {
      this.redirectTo = state.url;
      return true;
    }
    this.router.navigate([this.redirectTo]);
    return false;
  }
}
