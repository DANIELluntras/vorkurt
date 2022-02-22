import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryTabProjectComponent } from './repository-tab-project/repository-tab-project.component';
import { RouterModule } from '@angular/router';
import { AppRepositoryRouting } from './repository.routing';
import { PullRequestComponent } from './pull-request/pull-request.component';
import { CodeComponent } from './code/code.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    RepositoryTabProjectComponent,
    PullRequestComponent,
    CodeComponent,
    SettingsComponent,
  ],
  imports: [CommonModule, AppRepositoryRouting],
})
export class RepositoryModule {}
