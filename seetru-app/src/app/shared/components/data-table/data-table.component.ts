import { Component, input } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

const ICON_ALERT = '/assets/icons/ic-alert.svg';
const ICON_MORE = '/assets/icons/ic-more.svg';

export interface DataTableColumn {
  dataField: string;
  caption: string;
  width?: number | string;
  cellTemplate?: string;
  alignment?: 'left' | 'center' | 'right';
}

export interface ProjectRow {
  id: number;
  projectName: string;
  psc: string;
  operator: string;
  type: number;
  assetFocal: string;
  currentMilestone: string;
  status: string;
  nextSitting?: string;
  hasAlert?: boolean;
}

export const STATUS_STYLES: Record<string, { bg: string; color: string }> = {
  'Awaiting PAC': { bg: '#e0ebff', color: '#2370ff' },
  'MPM Review': { bg: '#ccefee', color: '#00b1a9' },
  'At risk': { bg: '#fcdbdc', color: '#ec0000' },
  Revise: { bg: '#e4d9ea', color: '#763f98' },
  New: { bg: '#feebd1', color: '#bc7c00' },
};

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [DxDataGridModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  readonly dataSource = input.required<ProjectRow[]>();
  readonly statusStyles = STATUS_STYLES;
  readonly alertIconUrl = ICON_ALERT;
  readonly moreIconUrl = ICON_MORE;

  getStatusStyle(status: string): { bg: string; color: string } {
    return this.statusStyles[status] ?? { bg: '#eee', color: '#333' };
  }
}
