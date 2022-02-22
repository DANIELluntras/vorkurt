import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewRepositoryService } from '../../../../shared/utils/services/newRepository/new-repository.service';
import { OverlayService } from '../../../../shared/utils/services/overlay/overlay.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConnectionService } from '../../../../shared/utils/services/firebase/connection.service';
import { INewRepository } from '../../../../shared/utils/interfaces';
import { TemplateRepositoryService } from '../../../../shared/utils/services/newRepository/template-repository/template-repository.service';

@Component({
  selector: 'elix-template-repository',
  templateUrl: './template-repository.component.html',
  styleUrls: ['./template-repository.component.scss'],
})
export class TemplateRepositoryComponent implements OnInit, OnDestroy {
  dataTemplate: any;
  private unSubscribe = new Subject();

  constructor(
    private _sendTemplate: TemplateRepositoryService,
    private _newRepository: NewRepositoryService,
    private _overlayService: OverlayService,
    private _dbCon: ConnectionService
  ) {}

  ngOnInit(): void {
    this._newRepository.newRepo$
      .pipe(takeUntil(this.unSubscribe))
      .subscribe((resp) => {
        this.dataTemplate = resp;
      });
  }

  onClick(event: INewRepository) {
    event.check = true;
    this._dbCon.updateData(event).then((resp) => {
      if (resp) {
        this._sendTemplate.sendDataOnObservable(event.template);
        this._overlayService.closeOverlay();
      }
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
