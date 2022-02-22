import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayService } from '../../../shared/utils/services/overlay/overlay.service';
import { TemplateRepositoryComponent } from '../tooltip/template-repository/template-repository.component';
import { TemplateRepositoryService } from '../../../shared/utils/services/newRepository/template-repository/template-repository.service';

@Component({
  selector: 'elix-header-new-repo',
  templateUrl: './header-new-repo.component.html',
  styleUrls: ['./header-new-repo.component.scss'],
})
export class HeaderNewRepoComponent implements OnInit {
  dataTemplate: string;
  @ViewChild('button') button: any;

  constructor(
    private _overlayAll: OverlayService,
    private _dataSendedTemplate: TemplateRepositoryService
  ) {}

  ngOnInit(): void {
    this._dataSendedTemplate.templateData$.subscribe(
      (resp) => (this.dataTemplate = resp)
    );
  }

  openService(event: any) {
    const target = this.button as HTMLElement;
    this._overlayAll.display(target, TemplateRepositoryComponent);
  }
}
