import { Component, OnInit } from '@angular/core';
import { SpinnerStateService } from './spinner-state.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'elix-spinner',
  template:
    '<div *ngIf="showSppiner" class="lds-hourglass flex justify-center items-center"></div>',
  styleUrls: ['./elix-spinner.component.scss'],
})
export class ElixSpinnerComponent implements OnInit {
  private _showSppiner: boolean;

  constructor(private _spinnerStateService: SpinnerStateService) {}

  get showSppiner(): boolean {
    return this._showSppiner;
  }

  ngOnInit(): void {
    this._spinnerStateService.getState$.subscribe(
      (resp) => (this._showSppiner = resp)
    );
  }
}
