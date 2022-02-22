import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerArray } from '../../config/global/config-router';
import { RepositoryTabProjectComponent } from './repository-tab-project/repository-tab-project.component';
import { PullRequestComponent } from './pull-request/pull-request.component';
import { CodeComponent } from './code/code.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '' },
  {
    path: '',
    component: RepositoryTabProjectComponent,
    data: { data: routerArray },
    children: [
      {
        path: 'code',
        component: CodeComponent,
      },
      {
        path: 'pull_request',
        component: PullRequestComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRepositoryRouting {}
