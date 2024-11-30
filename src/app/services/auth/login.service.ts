import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as config from '../../app.config.json';
import { environment } from '../../../assets/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  onLogin(): Observable<any> {
  const url = environment.apiBase + config.ENCRYPT_URL;
    return this.http.post(url, '')
  }
}
