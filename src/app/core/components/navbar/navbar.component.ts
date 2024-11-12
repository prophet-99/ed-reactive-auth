import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStoreService } from '@core/store/auth-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private _authStoreService: AuthStoreService,
    private _router: Router
  ) {}

  public logout(): void {
    this._authStoreService.logoutUser();
    this._router.navigateByUrl('/');
  }
}
