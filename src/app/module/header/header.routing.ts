import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent }      from "./header.component";
import { AuthGuardGuard }       from "../../shared/utils/services";


const routes : Routes = [

  { path: '', redirectTo: 'account', pathMatch: 'full' },

  {
    path: '', component: HeaderComponent,
    data: {
      breadCrumb: 'Account',
    },
    children: [
      {
        path: 'account',
        loadChildren: () => import('./../account/account.module').then( m => m.AccountModule ),
        data: {
          breadCrumb: 'Account',
        },
      },
      {
        path: 'new',
        loadChildren: () => import('./../newRepo/new-repo.module').then( m => m.NewRepoModule ),
        data: {
          breadCrumb: 'NEW',
        },
      },
      {
        path: 'timer',
        loadChildren: () => import('./../timer/timer.module').then( m => m.TimerModule ),
        data: {
          breadCrumb: 'Timer',
        },
      },
      {
        path: 'tms',
        loadChildren: () => import('./../transport/transport.module').then( m => m.TransportModule ),
        data: {
          breadCrumb: 'TMS',
        },
      },
      {
        path: 'explore',
        loadChildren: () => import ('./../explore/explore.module').then( m => m.ExploreModule ),
        data: {
          breadCrumb: 'Explore',
        },
      },
      {
        path: ":id",
        canActivate: [ AuthGuardGuard ],
        loadChildren: () => import('../repository/repository.module').then( m => m.RepositoryModule ),
        
      },
    ],
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class AppHeaderRouting {
}
