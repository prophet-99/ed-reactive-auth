import { Injectable } from '@angular/core';

import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

import { type Auth, type AuthUser } from '@core/models/auth.model';
import { AuthService } from '@core/services/auth.service';
import {
  existInLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  storeInLocalStorage,
} from '@core/utils/loca-storage.util';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthStoreService {
  private _LS_JWT = 'ED_REACTIVE_AUTH_JWT';
  private _userSubject = new BehaviorSubject<AuthUser | null>(null);
  public user$ = this._userSubject.asObservable();

  constructor(private _authService: AuthService) {
    if (existInLocalStorage(this._LS_JWT))
      this._userSubject.next(this._decodeAuthUser());
  }

  public authUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Observable<Auth> {
    return this._authService.loginUser(email, password).pipe(
      tap(({ token }) => {
        storeInLocalStorage(token, this._LS_JWT);
        this._userSubject.next(this._decodeAuthUser());
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 400)
          return throwError(
            () => new Error('¡Credenciales incorrectas, vuelve a intentarlo!')
          );
        return throwError(
          () => new Error('Error de servidor. Inténtalo más tarde...')
        );
      })
    );
  }

  private _decodeAuthUser(): AuthUser {
    const jwt = getFromLocalStorage<string>(this._LS_JWT);
    return JSON.parse(
      atob(jwt.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
    );
  }

  public logoutUser(): void {
    removeFromLocalStorage(this._LS_JWT);
    this._userSubject.next(null);
  }
}
