import { Component, input } from '@angular/core';
import { AppModule } from '../../models/module.model';

@Component({
  selector: 'app-module-detail-card',
  standalone: true,
  template: `
    <article class="module-detail-card">
      <header class="module-detail-card__header">
        <div class="module-detail-card__icon-wrap">
          <img
            [src]="module().iconUrl"
            [alt]="module().name + ' icon'"
            class="module-detail-card__icon"
            loading="lazy"
          />
        </div>
        <h3 class="module-detail-card__title">{{ module().name }}</h3>
      </header>
      <p class="module-detail-card__description">{{ module().description }}</p>
    </article>
  `,
  styleUrl: './module-detail-card.component.scss',
})
export class ModuleDetailCardComponent {
  readonly module = input.required<AppModule>();
}
