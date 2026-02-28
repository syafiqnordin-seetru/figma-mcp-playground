import { Component, input } from '@angular/core';
import { AppModule } from '../../models/module.model';

@Component({
  selector: 'app-module-card',
  standalone: true,
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.scss',
})
export class ModuleCardComponent {
  readonly module = input.required<AppModule>();
}
