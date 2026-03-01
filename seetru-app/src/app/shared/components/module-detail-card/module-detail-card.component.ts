import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppModule } from '../../models/module.model';

const ROUTE_MAP: Record<string, string> = {
  project: '/project-management',
};

@Component({
  selector: 'app-module-detail-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './module-detail-card.component.html',
  styleUrl: './module-detail-card.component.scss',
})
export class ModuleDetailCardComponent {
  readonly module = input.required<AppModule>();
  readonly moduleRoute = computed(() => ROUTE_MAP[this.module().id] ?? null);
}
