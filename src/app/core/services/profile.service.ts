import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';
import { type Stats } from '@core/models/stats.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _apiURL = `${environment.BASE_API}/api`;

  constructor(private _httpClient: HttpClient) {}

  public getBiography(): Observable<string> {
    return this._httpClient
      .get<{ biography: string }>(`${this._apiURL}/biography`)
      .pipe(map(({ biography }) => biography));
  }

  public getStats(): Observable<Stats> {
    return this._httpClient.get<Stats>(`${this._apiURL}/stats`);
  }
}
