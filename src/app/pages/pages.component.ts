import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-navbar />
    <main class="p-5">
      <router-outlet />
    </main>
  `,
  styles: [``],
})
export class PagesComponent {}
