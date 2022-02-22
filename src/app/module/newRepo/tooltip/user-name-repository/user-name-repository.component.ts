import { Component, OnInit } from '@angular/core';
import { LocalStorageDataService } from '../../../../shared/utils/services/abstract/local-storage-data.service';
import { OverlayService } from '../../../../shared/utils/services/overlay/overlay.service';
import { TemplateRepositoryService } from '../../../../shared/utils/services/newRepository/template-repository/template-repository.service';

@Component({
  selector: 'elix-user-name-repository',
  templateUrl: './user-name-repository.component.html',
  styleUrls: ['./user-name-repository.component.scss'],
})
export class UserNameRepositoryComponent implements OnInit {
  usersName: any;

  constructor(
    private _templateRepository: TemplateRepositoryService,
    private _localStoarage: LocalStorageDataService,
    private _overlayGlobal: OverlayService
  ) {}

  ngOnInit(): void {
    this.usersName = JSON.parse(
      <string>this._localStoarage.getResource('user')
    );
  }

  onClick() {
    this._templateRepository.sendUserNameOnObservable(
      this.usersName.user.email
    );
    this._overlayGlobal.closeOverlay();
  }
}
