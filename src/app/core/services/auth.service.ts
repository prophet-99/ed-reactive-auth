import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { type Auth } from '@core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _apiURL = `${environment.BASE_API}/auth`;

  constructor(private _httpClient: HttpClient) {}

  public loginUser(email: string, password: string): Observable<Auth> {
    return this._httpClient.post<Auth>(`${this._apiURL}/login`, {
      email,
      password,
    });
  }
}
