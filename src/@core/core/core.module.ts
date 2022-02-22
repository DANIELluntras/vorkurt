import { ErrorHandler, NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlobalErrorHandleService } from '../../app/shared/utils/services/abstract/global-error-handle.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [HttpClientModule, MatButtonModule, RouterModule],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandleService }],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
})
export class CoreModule {
  constructor(
    private _domSanitizer: DomSanitizer,
    private _matIconRegistry: MatIconRegistry
  ) {
    this._matIconRegistry.addSvgIconSetInNamespace(
      'fa_brands',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/svgs/brands.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'fa_regular',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/svgs/regular.svg'
      )
    );
    this._matIconRegistry.addSvgIconSetInNamespace(
      'fa_solid',
      this._domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/svgs/solid.svg'
      )
    );
  }
}
