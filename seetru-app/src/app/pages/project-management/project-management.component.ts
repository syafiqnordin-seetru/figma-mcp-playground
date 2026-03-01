import { Component, signal } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { TopNavComponent } from '../../shared/components/top-nav/top-nav.component';
import { KpiCardComponent } from '../../shared/components/kpi-card/kpi-card.component';
import {
  MilestoneCarouselComponent,
  MilestoneItem,
} from '../../shared/components/milestone-carousel/milestone-carousel.component';
import {
  ScatterChartComponent,
  ScatterDataPoint,
} from '../../shared/components/scatter-chart/scatter-chart.component';
import {
  RadarChartComponent,
  RadarDataPoint,
} from '../../shared/components/radar-chart/radar-chart.component';
import {
  DataTableComponent,
  ProjectRow,
} from '../../shared/components/data-table/data-table.component';

interface KpiItem {
  label: string;
  value: string | number;
  iconUrl: string;
  hasInfo?: boolean;
  infoIconUrl?: string;
}

const ASSETS = {
  schedule: '/assets/9035ea06b11a6230b7d8b7056f8d9944f8399a83.svg',
  overdue: '/assets/cc06cd55326592dadf0a07f7f2ee48954ee4762c.svg',
  info: '/assets/a4968d7d88c2709ff2eceadafa391e1e6f7857aa.svg',
  hcDelay: '/assets/dd084ff74c9c5d982b6e1b9f53b1371424c5b0fc.svg',
  sittings: '/assets/be7cef7a92f8d1625cbc490b0ac9507cfa49e747.svg',
  closeout: '/assets/161e0dd4acf98fd4d87b8caee8b70fd57d932d64.svg',
};

const ICONS = {
  chevronUp: '/assets/icons/ic-chevron-up-purple.svg',
  chevronDown: '/assets/icons/ic-chevron-down-purple.svg',
  search: '/assets/icons/ic-search.svg',
  plus: '/assets/icons/ic-plus-white.svg',
  download: '/assets/icons/ic-download.svg',
};

function makeScatterData(categories: string[], count = 20): ScatterDataPoint[] {
  const data: ScatterDataPoint[] = [];
  categories.forEach((cat, ci) => {
    for (let i = 0; i < count; i++) {
      data.push({ x: Math.random() * 8, y: Math.random() * 30, category: cat });
    }
  });
  return data;
}

function makeRadarData(projects: string[]): RadarDataPoint[] {
  const axes = ['Value (NPV)', 'Duration (MR1-1st HC)', 'Cost (UDC)'];
  const data: RadarDataPoint[] = [];
  projects.forEach((p) => {
    axes.forEach((axis) => {
      data.push({ axis, value: 20 + Math.random() * 60, project: p });
    });
  });
  return data;
}

@Component({
  selector: 'app-project-management',
  standalone: true,
  imports: [
    SidebarComponent,
    TopNavComponent,
    KpiCardComponent,
    MilestoneCarouselComponent,
    ScatterChartComponent,
    RadarChartComponent,
    DataTableComponent,
  ],
  templateUrl: './project-management.component.html',
  styleUrl: './project-management.component.scss',
})
export class ProjectManagementComponent {
  readonly analysisCollapsed = signal(false);
  readonly icons = ICONS;

  readonly kpis = signal<KpiItem[]>([
    { label: 'Pending review', value: 2, iconUrl: ASSETS.schedule },
    { label: 'Overdue approval', value: 1, iconUrl: ASSETS.overdue },
    {
      label: '1st HC delay',
      value: 8,
      iconUrl: ASSETS.hcDelay,
      hasInfo: true,
      infoIconUrl: ASSETS.info,
    },
    { label: 'Upcoming sittings', value: 26, iconUrl: ASSETS.sittings },
    { label: 'Project closeout', value: 153, iconUrl: ASSETS.closeout },
  ]);

  readonly milestones = signal<MilestoneItem[]>([
    { name: 'MR1', total: 60, delayed: 5, onTrack: 55 },
    { name: 'MR2', total: 45, delayed: 10, onTrack: 35 },
    { name: 'MR3', total: 8, delayed: 5, onTrack: 3 },
    { name: 'MR4', total: 21, delayed: 6, onTrack: 15 },
    { name: 'MR5', total: 14, delayed: 0, onTrack: 14 },
    { name: 'FDP', total: 14, delayed: 0, onTrack: 14 },
    { name: 'Execution', total: 8, delayed: 1, onTrack: 7 },
    { name: '1st HC', total: 8, delayed: 1, onTrack: 7 },
  ]);

  readonly milestoneCategories = ['MR1', 'MR2', 'MR3', 'MR4', 'MR5', 'Execution'];

  readonly scatterCharts = signal([
    {
      title: 'Overall duration performance',
      subtitle: 'Volume vs overall duration',
      xLabel: 'Duration (Years)',
      yLabel: 'Volume (MMBOE)',
      filterLabels: ['Dev. phase', 'Project type'],
      data: makeScatterData(this.milestoneCategories),
    },
    {
      title: 'Indicative value',
      subtitle: 'Volume vs NPV',
      xLabel: 'NPV (MMUSD)',
      yLabel: 'Volume (MMBOE)',
      filterLabels: ['PAC type'],
      data: makeScatterData(this.milestoneCategories),
    },
    {
      title: 'Cost performance',
      subtitle: 'Volume vs UDC',
      xLabel: 'UDC (USD/BOE)',
      yLabel: 'Volume (MMBOE)',
      filterLabels: ['Project type'],
      data: makeScatterData(this.milestoneCategories),
    },
    {
      title: 'Execution schedule performance',
      subtitle: 'Volume vs Duration',
      xLabel: '1st HC Date',
      yLabel: 'Volume (MMBOE)',
      filterLabels: ['Project type'],
      data: makeScatterData(['On time schedule', 'Delay']),
    },
  ]);

  readonly radarCharts = signal([
    {
      title: 'Project health: High 5',
      filterLabels: ['Project type'],
      data: makeRadarData(['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5']),
    },
    {
      title: 'Project health: Low 5',
      filterLabels: ['Project type'],
      data: makeRadarData(['Project 6', 'Project 7', 'Project 8', 'Project 9', 'Project 10']),
    },
  ]);

  readonly tableFilters = ['Asset focal', 'Risk', 'Milestone', 'Status'];

  readonly tableData = signal<ProjectRow[]>([
    {
      id: 1,
      projectName: 'Sendayu Development Project',
      psc: 'SB-5',
      operator: 'PTTEP',
      type: 1,
      assetFocal: 'Ahmad Hassan',
      currentMilestone: 'MR3-Awaiting PAC',
      status: 'Awaiting PAC',
    },
    {
      id: 2,
      projectName: 'Offshore Dev SK-4',
      psc: 'SK-4',
      operator: 'Shell Malaysia',
      type: 1,
      assetFocal: 'Suresh Pillai',
      currentMilestone: 'Baseline-Docs. submitted',
      status: 'MPM Review',
    },
    {
      id: 3,
      projectName: 'EOR Program SB-2',
      psc: 'SB-2',
      operator: 'ExxonMobil Malaysia',
      type: 2,
      assetFocal: 'Rajesh Singh',
      currentMilestone: 'MR1-Docs. submitted',
      status: 'MPM Review',
      hasAlert: true,
    },
    {
      id: 4,
      projectName: 'Field Dev PM-3',
      psc: 'PM-3',
      operator: 'Murphy Oil',
      type: 1,
      assetFocal: 'Fatimah Wong',
      currentMilestone: 'MR2-Awaiting PAC',
      status: 'At risk',
      hasAlert: true,
    },
    {
      id: 5,
      projectName: 'Brownfield Revamp SB-5',
      psc: 'SB-5',
      operator: 'Murphy Oil',
      type: 1,
      assetFocal: 'Mustapha Kamall',
      currentMilestone: 'MR2-New milestone',
      status: 'Awaiting PAC',
    },
    {
      id: 6,
      projectName: 'LNG Terminal SB-3',
      psc: 'SB-3',
      operator: 'Chevron Malaysia',
      type: 2,
      assetFocal: 'Zara Lim',
      currentMilestone: 'MR4-New milestone',
      status: 'Awaiting PAC',
    },
    {
      id: 7,
      projectName: 'Subsea SK-8',
      psc: 'SK-8',
      operator: 'Equinor Malaysia',
      type: 2,
      assetFocal: 'Mei Ling',
      currentMilestone: 'MR3-New milestone',
      status: 'Awaiting PAC',
    },
    {
      id: 8,
      projectName: 'FP Unit PM-5',
      psc: 'PM-5',
      operator: 'ConocoPhillips Malaysia',
      type: 1,
      assetFocal: 'Chloe Lee',
      currentMilestone: 'MR5-New milestone',
      status: 'Awaiting PAC',
    },
    {
      id: 9,
      projectName: 'Offshore Wind PM-6',
      psc: 'PM-6',
      operator: 'PETRONAS',
      type: 2,
      assetFocal: 'Arjun Patel',
      currentMilestone: 'MR3-Docs. submitted',
      status: 'Revise',
    },
    {
      id: 10,
      projectName: 'Enhanced Oil SK-1',
      psc: 'SK-1',
      operator: 'PETRONAS',
      type: 1,
      assetFocal: 'Aisha Tan',
      currentMilestone: 'Execution-New milestone',
      status: 'Awaiting PAC',
    },
  ]);

  toggleAnalysis(): void {
    this.analysisCollapsed.update((v) => !v);
  }
}
