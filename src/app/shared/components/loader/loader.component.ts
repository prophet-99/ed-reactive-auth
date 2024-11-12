import { Component } from '@angular/core';

import { LoaderStateService } from './loader-state.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styles: [
    `
      .sh-loader {
        height: 75vh;
      }
    `,
  ],
})
export class LoaderComponent {
  constructor(public loaderStateService: LoaderStateService) {}
}
