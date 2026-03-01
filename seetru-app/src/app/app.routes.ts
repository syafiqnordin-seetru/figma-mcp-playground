import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'MPM Digital Intelligence Centre',
  },
  {
    path: 'project-management',
    component: ProjectManagementComponent,
    title: 'Project Management',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
