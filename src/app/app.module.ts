import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../@core/core/core.module";
import {SharedModule} from "./shared/shared.module";
import {firebaseConfig} from "./config/auth/firebase";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AuthComponent} from './auth/auth.component';
import {MatRippleModule} from "@angular/material/core";
import {OverlayModule} from "@angular/cdk/overlay";
import {PageNotFoundComponent} from './auth/page-not-found/page-not-found.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {PortalModule} from "@angular/cdk/portal";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, PageNotFoundComponent, ForgotPasswordComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    CoreModule,
    SharedModule,
    MatRippleModule,
    OverlayModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
