import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Country } from '../../models/country';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  isUserLoggedInSub = new BehaviorSubject(false);
  isUserLoggedIn: boolean = false;
  isLoaderOn = new BehaviorSubject(false);
  countryCodes = [];

  constructor(
    private authService: AuthService,
    private route: Router
  ) {}

  userStatus() {
    if (sessionStorage.getItem('token')) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedInSub.subscribe((res) => {
        if (res) {
          this.isUserLoggedIn = res;
        }
      });
    }
    return this.isUserLoggedIn;
  }

  getAllCountries() {
    if (!this.getCountries() || !this.getCountries()?.length) {
      this.authService.getCountries().subscribe(
        (res: any) => {
          const data = res.data.length ? res.data : [];
          const countries = data?.sort((a: any, b: any) => {
            const x = a.phone_code[0].replace('+', '').replace('-', '');
            const y = b.phone_code[0].replace('+', '').replace('-', '');
            return x - y;
          });
          countries.forEach((country: Country<any>) => {
            const con = country.phone_code[0];
            if (!this.countryCodes.includes(con as never)) {
              this.countryCodes.push(con as never);
            }
          });
          this.setCountries(this.countryCodes);
          return this.countryCodes;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
        return this.getCountries();
    }
  }

  getCountries() {
    let countryCodes: any = localStorage.getItem('countryCodes');
    if (countryCodes) {
      countryCodes = JSON.parse(countryCodes as never);
    } else {
      countryCodes = this.countryCodes;
    }
    return countryCodes;
  }

  setCountries(codes: string[]) {
    localStorage.setItem('countryCodes', JSON.stringify(codes));
  }

  generateKYCToken(phone: string, state?: any) {
    this.authService.generateKYCToken().subscribe((res) => {
      if (res.data && res.data.token) {
        this.route.navigate(['/launch-sdk'], {
          state: {
            sdkToken: res.data.token,
            phone: phone
          },
        });
        if (state) {
          this.login(state);
        }
      }
    });
  }

  login(payload: any) {
    this.authService.onLogin(payload).subscribe((res) => {
      console.log('token generated!!');
    }, (err) => {
      console.error(err);
    })
  }
}
