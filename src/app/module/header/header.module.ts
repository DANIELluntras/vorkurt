import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderRouting} from "./header.routing";
import {HeaderComponent} from "./header.component";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {PopUpLoginComponent} from './pop-up-login/pop-up-login.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedModule} from "../../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatBadgeModule} from "@angular/material/badge";
import {NotificationComponent} from "./tooltip/notification/notification.component";

@NgModule({
    declarations: [
        HeaderComponent,
        PopUpLoginComponent,
        NotificationComponent
    ],
    imports: [
        OverlayModule,
        MatIconModule,
        FormsModule,
        CommonModule,
        AppHeaderRouting,
        DragDropModule,
        SharedModule,
        MatButtonModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatBadgeModule,
    ]
})
export class HeaderModule {
}
