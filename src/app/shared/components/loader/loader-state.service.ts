import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  concatMap,
  finalize,
  Observable,
  of,
  tap,
} from 'rxjs';

@Injectable()
export class LoaderStateService {
  private _loaderSubject = new BehaviorSubject<boolean>(false);
  public loaderState$ = this._loaderSubject.asObservable();

  public showLoaderFromStream<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.showLoader()),
      concatMap(() => obs$),
      finalize(this.hideLoader.bind(this))
    );
  }

  public showLoader(): void {
    this._loaderSubject.next(true);
  }

  public hideLoader(): void {
    this._loaderSubject.next(false);
  }
}
