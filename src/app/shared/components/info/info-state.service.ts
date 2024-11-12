import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Info } from './info.model';

@Injectable()
export class InfoStateService {
  private infoSubject = new BehaviorSubject<Info>({
    show: false,
  });
  public info$ = this.infoSubject.asObservable();

  public showInfo({ severity, detail }: Omit<Info, 'show'>): void {
    this.infoSubject.next({
      show: true,
      detail,
      severity,
    });
  }

  public hideInfo(): void {
    this.infoSubject.next({
      show: false,
    });
  }
}
