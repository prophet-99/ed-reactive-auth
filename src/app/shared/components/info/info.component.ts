import { Component } from '@angular/core';
import { InfoStateService } from './info-state.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  constructor(public infoStateService: InfoStateService) {}
}
