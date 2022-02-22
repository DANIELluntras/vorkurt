import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRepoComponent } from './new-repo.component';
import { NewRepositoryResolver } from '../../shared/utils/services/resolvers/newRepository/new-repository.resolver';

const routes: Routes = [
  {
    path: '',
    component: NewRepoComponent,
    resolve: { newRepo: NewRepositoryResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRepoRouting {}
