import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
