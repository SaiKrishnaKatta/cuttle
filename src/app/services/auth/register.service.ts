import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../assets/environments/environment';
import * as config from '../../app.config.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  onSignUp(req: any): Observable<any> {
    const url = environment.apiBase + config.SIGN_UP_URL;
    return this.http.post(url, req);
  }
}
