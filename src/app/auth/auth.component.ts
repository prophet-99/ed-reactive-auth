import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthStoreService } from '@core/store/auth-store.service';
import { InfoStateService } from '@shared/components/info/info-state.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  providers: [InfoStateService],
})
export class AuthComponent implements OnInit {
  public authForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authStoreService: AuthStoreService,
    private _infoStateService: InfoStateService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.authForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public authenticate(): void {
    if (this.authForm.invalid) return;

    this._authStoreService.authUser(this.authForm.value).subscribe({
      next: () => {
        this._router.navigateByUrl('/dashboard');
      },
      error: (error: Error) => {
        this._infoStateService.showInfo({
          severity: 'error',
          detail: error.message,
        });
      },
    });
  }

  //* VALIDATIONS
  public hasGenericError(formControlName: string): boolean | undefined {
    const hasError = this.authForm.get(formControlName)?.errors ? true : false;
    return this.authForm.get(formControlName)?.touched && hasError;
  }

  public hasControlError(
    formControlName: string,
    errorType: string
  ): boolean | undefined {
    return (
      this.authForm.get(formControlName)?.touched &&
      this.authForm.get(formControlName)?.hasError(errorType)
    );
  }
}
