import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppModule } from '../../models/module.model';

const ROUTE_MAP: Record<string, string> = {
  project: '/project-management',
};

@Component({
  selector: 'app-module-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.scss',
})
export class ModuleCardComponent {
  readonly module = input.required<AppModule>();
  readonly moduleRoute = computed(() => ROUTE_MAP[this.module().id] ?? null);
}
