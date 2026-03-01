import { Component, input, signal } from '@angular/core';
import { DxChartModule } from 'devextreme-angular';

const CHEVRON_DOWN = '/assets/icons/ic-chevron-down-purple.svg';

export interface ScatterDataPoint {
  x: number | string;
  y: number;
  category: string;
}

export interface ScatterFilter {
  label: string;
  options: string[];
}

@Component({
  selector: 'app-scatter-chart',
  standalone: true,
  imports: [DxChartModule],
  templateUrl: './scatter-chart.component.html',
  styleUrl: './scatter-chart.component.scss',
})
export class ScatterChartComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly chartData = input.required<ScatterDataPoint[]>();
  readonly xLabel = input.required<string>();
  readonly yLabel = input.required<string>();
  readonly palette = input<string[]>([
    '#F97316',
    '#3B82F6',
    '#22C55E',
    '#EC4899',
    '#A855F7',
    '#EAB308',
    '#14B8A6',
  ]);
  /** Filter button labels shown above chart */
  readonly filterLabels = input<string[]>([]);
  /** Quadrant reference lines: {value, orientation} */
  readonly referenceLines = input<{ value: number; orientation: 'vertical' | 'horizontal' }[]>([]);

  readonly activeFilters = signal<Record<string, boolean>>({});
  readonly chevronDownUrl = CHEVRON_DOWN;
}
