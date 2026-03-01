import { Component, input, signal } from '@angular/core';
import { DxPolarChartModule } from 'devextreme-angular';

const CHEVRON_DOWN = '/assets/icons/ic-chevron-down-purple.svg';

export interface RadarDataPoint {
  axis: string;
  value: number;
  project: string;
}

@Component({
  selector: 'app-radar-chart',
  standalone: true,
  imports: [DxPolarChartModule],
  templateUrl: './radar-chart.component.html',
  styleUrl: './radar-chart.component.scss',
})
export class RadarChartComponent {
  readonly title = input.required<string>();
  readonly chartData = input.required<RadarDataPoint[]>();
  readonly projectLabels = input<string[]>([]);
  readonly filterLabels = input<string[]>([]);
  readonly palette = input<string[]>(['#F97316', '#3B82F6', '#22C55E', '#EC4899', '#A855F7']);
  readonly chevronDownUrl = CHEVRON_DOWN;
}
