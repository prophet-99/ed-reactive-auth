import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    // ANGULAR
    CommonModule,
    ReactiveFormsModule,
    // INTERNAL
    AuthRoutingModule,
    //EXTERNAL
    CheckboxModule,
    CardModule,
    ButtonModule,
    InputTextModule,
  ],
})
export class AuthModule {}
