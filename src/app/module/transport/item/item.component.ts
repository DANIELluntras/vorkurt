import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component( {
  selector: 'elix-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.sass' ],
} )
export class ItemComponent implements OnInit {
  constructor (
      private _router : Router,
      private activatedRoute : ActivatedRoute
  ) {
  }
  
  goToPage (action : string) {
  }
  
  ngOnInit () {
  }
}
