import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { PagesRoutingModule } from './pages-routing.module';
import { CoreModule } from '../core/core.module';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent, ProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    CardModule,
    CoreModule,
    SharedModule,
  ],
})
export class PagesModule {}
