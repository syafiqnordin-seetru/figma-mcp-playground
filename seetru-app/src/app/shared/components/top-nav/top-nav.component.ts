import { Component, signal } from '@angular/core';
import { DxButtonModule, DxTemplateModule } from 'devextreme-angular';

const TITLE_GRADIENT = 'http://localhost:3845/assets/d57b8ead4576fa08ebc5dfadf3d7d4ef70fdf5a5.png';
const AI_ICON_BG     = 'http://localhost:3845/assets/16e87bba8fe9dbbd89065255c614511d4e2588ed.svg';
const AI_ICON_INNER  = 'http://localhost:3845/assets/1c0219413a32f424ccb36a7a6252c7f8bc0f014d.svg';
const BELL_ICON      = 'http://localhost:3845/assets/eb8301f88aa8e36581963e56c3d74df390d4dedf.svg';
const NOTIF_DOT      = 'http://localhost:3845/assets/ec5407cb68b5e5877d8cf1c0ead7f00b0d533064.svg';
const GRID_ICON      = 'http://localhost:3845/assets/e258432fb7dd8f256af00f8d606a3cf7ed815044.svg';
const AVATAR_BG      = 'http://localhost:3845/assets/74a06493858659e3ed4959f30feebb197bd4e8b6.svg';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [DxButtonModule, DxTemplateModule],
  template: `
    <header class="top-nav">
      <!-- Gradient clip-text title -->
      <h1 class="top-nav__title" [style.--title-bg]="'url(' + titleGradient + ')'">
        MPM Digital Intelligence Centre
      </h1>

      <!-- Right action group -->
      <div class="top-nav__actions">

        <!-- AI icon button -->
        <button class="top-nav__icon-btn top-nav__ai-btn" type="button" aria-label="AI Assistant">
          <img [src]="aiIconBg"    alt="" class="top-nav__ai-bg" />
          <img [src]="aiIconInner" alt="" class="top-nav__ai-inner" />
        </button>

        <!-- Bell – DevExtreme DxButton with custom template -->
        <dx-button stylingMode="text" class="top-nav__dx-btn" hint="Notifications" aria-label="Notifications">
          <div *dxTemplate="let d of 'content'" class="top-nav__btn-content">
            <span class="top-nav__bell-wrap">
              <img [src]="bellIcon" alt="" width="20" height="20" />
              @if (hasNotifications()) {
                <img [src]="notifDot" alt="" class="top-nav__notif-dot" />
              }
            </span>
          </div>
        </dx-button>

        <!-- 9-dot menu – DevExtreme DxButton with custom template -->
        <dx-button stylingMode="text" class="top-nav__dx-btn" hint="Apps" aria-label="Apps">
          <div *dxTemplate="let d of 'content'" class="top-nav__btn-content">
            <img [src]="gridIcon" alt="" width="20" height="20" />
          </div>
        </dx-button>

        <!-- Avatar with monogram -->
        <div class="top-nav__avatar" role="button" tabindex="0" aria-label="User profile">
          <img [src]="avatarBg" alt="" class="top-nav__avatar-bg" />
          <span class="top-nav__avatar-initial">{{ userName() }}</span>
        </div>

      </div>
    </header>
  `,
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  readonly titleGradient    = TITLE_GRADIENT;
  readonly aiIconBg         = AI_ICON_BG;
  readonly aiIconInner      = AI_ICON_INNER;
  readonly bellIcon         = BELL_ICON;
  readonly notifDot         = NOTIF_DOT;
  readonly gridIcon         = GRID_ICON;
  readonly avatarBg         = AVATAR_BG;

  readonly userName         = signal('D');
  readonly hasNotifications = signal(true);
}
