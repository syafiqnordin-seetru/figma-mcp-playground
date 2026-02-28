import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTooltipModule, DxTemplateModule } from 'devextreme-angular';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { TopNavComponent } from '../../shared/components/top-nav/top-nav.component';
import { ModuleCardComponent } from '../../shared/components/module-card/module-card.component';
import { ModuleDetailCardComponent } from '../../shared/components/module-detail-card/module-detail-card.component';
import { AppModule } from '../../shared/models/module.model';

// Asset URLs served by Figma MCP localhost proxy
const ICON_PSC = '/assets/e15173eff595bb70c8c45b255beeec96b02dad93.svg'; // imgVector9  â€“ PSC Module
const ICON_PROJECT = '/assets/b856985d569f9a32b353e9527efea9fa20473186.png'; // imgIcon     â€“ Project Mgmt
const ICON_WELLS = '/assets/7d2f7c8ae96eb642f820a9b8742d3a339e11a6c3.png'; // imgVector18 â€“ Wells Mgmt
const ICON_ASSET = '/assets/b4b82734afd24dfc26755a71d2b27e2adf054bff.png'; // imgVector19 â€“ Asset Mgmt
const ICON_FACILITY = '/assets/7a7ab3d705bcca81545db9724cbfbbf621f8d745.png'; // imgVector20 â€“ Facility Improvement
const ICON_ABANDON = '/assets/c59ffeef46bebdbfb3a5fbd5e6d9b3e327c01900.png'; // imgVector21 â€“ Abandonment Mgmt
const ICON_CONFIG = '/assets/icon-system-config.svg'; // Exported from Figma node 15161:508286

// Info icons for section titles
export const INFO_ICON_RECENT =
  '/assets/084f20eaf7394d09c71558dfd47f1b070c246974.svg'; // imgVector17
export const INFO_ICON_MODULES =
  '/assets/e01e0e3dbe22b91295f13918c520489aa6db5ee4.svg'; // imgVector22

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    DxTooltipModule,
    DxTemplateModule,
    SidebarComponent,
    TopNavComponent,
    ModuleCardComponent,
    ModuleDetailCardComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  readonly infoIconRecent = INFO_ICON_RECENT;
  readonly infoIconModules = INFO_ICON_MODULES;
  // All available modules (signal for reactivity)
  readonly allModules = signal<AppModule[]>([
    {
      id: 'psc',
      name: 'Petroleum Arrangement Management',
      description:
        'Your single source of truth for PAC and PSC information. Access contract details, track work commitments, and more.',
      iconUrl: ICON_PSC,
    },
    {
      id: 'project',
      name: 'Project Management',
      description:
        'The essential tool for managing project approvals and execution. It streamlines reviews and captures key time series data for a smoother workflow.',
      iconUrl: ICON_PROJECT,
    },
    {
      id: 'wells',
      name: 'Wells Management',
      description:
        'An intelligent solution for seamless well management, covering essential workflows from planning approvals to critical drilling report submissions.',
      iconUrl: ICON_WELLS,
    },
    {
      id: 'asset',
      name: 'Asset Management',
      description:
        'Optimise asset value by integrating production, cost, and integrity data for strategic, lifecycle-focused decision making insights.',
      iconUrl: ICON_ASSET,
    },
    {
      id: 'facility',
      name: 'Facility Improvement',
      description:
        'Enhance facility improvement project workflow through data-driven module to maximise operational efficiency and increase reliability.',
      iconUrl: ICON_FACILITY,
    },
    {
      id: 'abandon',
      name: 'Abandonment Management',
      description:
        'Plan and prioritise abandonment or decommissioning using risk, cost, and compliance insights for sustainable end-of-life management.',
      iconUrl: ICON_ABANDON,
    },
    {
      id: 'config',
      name: 'System Configuration',
      description:
        'A unified module for managing core configurations, forming the backbone of consistent and seamless platform operations.',
      iconUrl: ICON_CONFIG,
    },
  ]);

  // Recent modules â€” the first 6 (signal-derived)
  readonly recentModules = computed(() => this.allModules().slice(0, 6));

  // My modules â€” the full list shown in detail cards
  readonly myModules = computed(() => this.allModules());

  // Grid rows: 4 per row
  readonly myModulesRow1 = computed(() => this.myModules().slice(0, 4));
  readonly myModulesRow2 = computed(() => this.myModules().slice(4));

  /** Returns an array of the needed number of spacers to fill an incomplete row of 4 */
  getSpacers(currentCount: number): number[] {
    const needed = (4 - (currentCount % 4)) % 4;
    return Array.from({ length: needed });
  }
}
