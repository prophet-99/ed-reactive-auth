import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    // ANGULAR
    CommonModule,
    ReactiveFormsModule,
    // INTERNAL
    AuthRoutingModule,
    SharedModule,
    //EXTERNAL
    CheckboxModule,
    CardModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class AuthModule {}
