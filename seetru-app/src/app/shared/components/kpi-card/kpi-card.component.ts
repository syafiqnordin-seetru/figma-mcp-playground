import { Component, input } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss',
})
export class KpiCardComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly iconUrl = input.required<string>();
  /** Show an info icon next to the label */
  readonly hasInfo = input<boolean>(false);
  readonly infoIconUrl = input<string>('');
}
