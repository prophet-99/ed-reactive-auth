import { Component, OnInit } from '@angular/core';

import { combineLatest, delay, map, Observable, take } from 'rxjs';

import { AuthStoreService } from '@core/store/auth-store.service';
import { ProfileService } from '@core/services/profile.service';
import { type AuthUser } from '@core/models/auth.model';
import { type Stats } from '@core/models/stats.model';
import { LoaderStateService } from '@shared/components/loader/loader-state.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [LoaderStateService],
})
export class ProfileComponent implements OnInit {
  public user$!: Observable<AuthUser & { biography: string } & Stats>;

  constructor(
    private _authStoreService: AuthStoreService,
    private _profileService: ProfileService,
    private _loaderStateService: LoaderStateService
  ) {}

  ngOnInit(): void {
    this.user$ = this._loaderStateService.showLoaderFromStream(
      combineLatest([
        this._authStoreService.user$ as Observable<AuthUser>,
        this._profileService.getBiography(),
        this._profileService.getStats(),
      ]).pipe(
        map(([userAuth, biography, stats]) => ({
          ...userAuth,
          biography,
          ...stats,
        })),
        delay(600),
        take(1)
      )
    );
  }
}
