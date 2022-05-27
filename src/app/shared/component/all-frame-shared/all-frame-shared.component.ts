import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityConfig } from '../../utils/interfaces/transport/configAllTransportFrame';

@Component({
  selector: 'elix-all-frame-shared',
  templateUrl: './all-frame-shared.component.html',
  styleUrls: ['./all-frame-shared.component.scss'],
})
export class AllFrameSharedComponent implements OnInit {
  public data: EntityConfig;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(
      (entity) => (this.data = entity.config)
    );
  }

  public navigateToEntity(url: String) {
    this._router.navigate(['.', url], { relativeTo: this._activatedRoute });
  }
}
