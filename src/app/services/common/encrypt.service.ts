import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as config from '../../app.config.json';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EncryptService {
  constructor(private http: HttpClient) {}

  onEncrypt(req: any): Observable<any> {
    const url = environment.apiBase + config.ENCRYPT_URL;
    return this.http.post(url, req);
  }
}
