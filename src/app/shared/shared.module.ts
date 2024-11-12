import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';

import { InfoComponent } from './components/info/info.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [InfoComponent, LoaderComponent],
  imports: [CommonModule, ProgressSpinnerModule, MessagesModule],
  exports: [InfoComponent, LoaderComponent],
})
export class SharedModule {}
