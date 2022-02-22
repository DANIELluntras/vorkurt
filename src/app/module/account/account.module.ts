import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRouting } from './account.routing';
import { LeftSideRepoComponent } from './left-side-repo/left-side-repo.component';
import { CenterActivityComponent } from './center-activity/center-activity.component';
import { RightSideArtifactsComponent } from './right-side-artifacts/right-side-artifacts.component';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountComponent,
    LeftSideRepoComponent,
    CenterActivityComponent,
    RightSideArtifactsComponent,
  ],
  imports: [
    CommonModule,
    AccountRouting,
    SharedModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class AccountModule {}
