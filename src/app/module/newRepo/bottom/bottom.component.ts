import { Component, OnInit } from '@angular/core';
import { TemplateRepositoryService } from '../../../shared/utils/services/newRepository/template-repository/template-repository.service';
import { ConnectionService } from '../../../shared/utils/services/firebase/connection.service';
import { IWrapperRepository } from '../../../shared/utils/interfaces';

@Component({
  selector: 'elix-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class BottomComponent implements OnInit {
  private template: string;
  private owner: string;
  private repositoryName: string;
  private description: string;
  private available: boolean;

  constructor(
    private _templateRepository: TemplateRepositoryService,
    private _connectionServiceFirebase: ConnectionService
  ) {}

  ngOnInit(): void {
    this._templateRepository.templateUserName$.subscribe(
      (resp) => (this.owner = resp)
    );
    this._templateRepository.templateData$.subscribe(
      (resp) => (this.template = resp)
    );
    this._templateRepository.templateRepositoryName$.subscribe(
      (resp) => (this.repositoryName = resp)
    );
    this._templateRepository.templateDescription$.subscribe(
      (resp) => (this.description = resp)
    );
    this._templateRepository.templateRepositoryAvailable$.subscribe(
      (resp) => (this.available = resp)
    );
  }

  onSubmit() {
    let newRepo = {
      template: this.template ?? '',
      owner: this.owner ?? '',
      repositoryName: this.repositoryName ?? '',
      description: this.description ?? '',
      available: this.available ?? false,
    } as IWrapperRepository;

    console.log('Sami');

    this._connectionServiceFirebase
      .createItems(newRepo, 'repositoryNew')
      .then((resp) => console.log(resp));
  }
}
