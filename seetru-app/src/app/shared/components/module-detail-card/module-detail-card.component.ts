import { Component, input } from '@angular/core';
import { AppModule } from '../../models/module.model';

@Component({
  selector: 'app-module-detail-card',
  standalone: true,
  templateUrl: './module-detail-card.component.html',
  styleUrl: './module-detail-card.component.scss',
})
export class ModuleDetailCardComponent {
  readonly module = input.required<AppModule>();
}
