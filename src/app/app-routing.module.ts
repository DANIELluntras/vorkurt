import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardGuard } from './shared/utils/services';
import { routerArray } from './config/global/config-router';
import { PageNotFoundComponent } from '../@core/core/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'forgot_password',
    component: ForgotPasswordComponent,
  },
  {
    path: '',
    data: { data: routerArray.pageHeader },
    canActivate: [AuthGuardGuard],
    loadChildren: () =>
      import('./module/header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'auth/l',
    component: AuthComponent,
  },
  { path: '', redirectTo: 'auth/l', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
