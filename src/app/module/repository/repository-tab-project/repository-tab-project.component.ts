import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'elix-repository-tab-project',
  templateUrl: './repository-tab-project.component.html',
  styleUrls: ['./repository-tab-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RepositoryTabProjectComponent implements OnInit {
  routes: [{ name: string; path: string }] = [{ name: '', path: '' }];

  constructor(private _router: ActivatedRoute) {}

  handleClick(event: string) {
    return event;
  }

  ngOnInit(): void {
    this.routes = this._router.snapshot.data.data.router;
  }
}
