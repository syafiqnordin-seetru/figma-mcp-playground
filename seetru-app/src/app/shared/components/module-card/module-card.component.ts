import { Component, input } from '@angular/core';
import { AppModule } from '../../models/module.model';

@Component({
  selector: 'app-module-card',
  standalone: true,
  template: `
    <button
      class="module-card"
      [attr.aria-label]="module().name"
      [title]="module().name"
    >
      <div class="module-card__icon-wrap">
        <img
          [src]="module().iconUrl"
          [alt]="module().name + ' icon'"
          class="module-card__icon"
          loading="lazy"
        />
      </div>
      <span class="module-card__label">{{ module().name }}</span>
    </button>
  `,
  styleUrl: './module-card.component.scss',
})
export class ModuleCardComponent {
  readonly module = input.required<AppModule>();
}
