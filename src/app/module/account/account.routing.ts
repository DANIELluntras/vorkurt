import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountResolver } from '../../shared/utils/services/resolvers/account/account.resolver';
import { RepositoryTabProjectComponent } from '../repository/repository-tab-project/repository-tab-project.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    resolve: { account: AccountResolver },
    children: [
      {
        path: 'timer',
        component: RepositoryTabProjectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRouting {}
