import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
    isUserLoggedInSub = new BehaviorSubject(false);
    isUserLoggedIn: boolean = false;
    isLoaderOn = new BehaviorSubject(false);

    constructor() {}

    userStatus() {
        if (sessionStorage.getItem('token')) {
            this.isUserLoggedIn = true;
        } else {
            this.isUserLoggedInSub.subscribe((res) => {
                if (res) {
                    this.isUserLoggedIn = res;
                }
            })
        }
        return this.isUserLoggedIn;
    }
}