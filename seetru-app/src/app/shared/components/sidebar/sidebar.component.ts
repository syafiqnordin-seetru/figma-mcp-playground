import { Component } from '@angular/core';

const LOGO_ICON = '/assets/246f41162f3d674d30aadf1b0a770af3dce85ea5.svg';
const APPS_ICON = '/assets/c7aeb19b3a224974b63cb4554580fd492696ba34.svg';
const PATTERN_IMG = '/assets/0d96809521dbec2cb973103af3f929d25d141857.png';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly logoIcon = LOGO_ICON;
  readonly appsIcon = APPS_ICON;
  readonly patternImg = PATTERN_IMG;
}
