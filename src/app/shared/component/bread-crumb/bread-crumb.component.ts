import { Component, OnInit } from '@angular/core';
import { filter }            from 'rxjs/operators';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  UrlSegment,
}                            from '@angular/router';
import { IBreadCrumb }       from '../../utils/interfaces';

@Component( {
  selector: 'elix-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: [ './bread-crumb.component.scss' ],
} )
export class BreadCrumbComponent implements OnInit {
  breadcrumbs : Array<IBreadCrumb>;
  
  constructor (
      private _activateRouter : ActivatedRoute,
      private _router : Router
  ) {
    this.initializeBreadCrumb();
  }
  
  ngOnInit () : void {
    this.initializeBreadCrumb();
  }
  
  private initializeBreadCrumb () {
    this._router.events
        .pipe( filter( (event) => event instanceof NavigationEnd ) )
        .subscribe( (event) => {
          // note, we don't use event
          this.breadcrumbs = [];
          let currentRoute = this._activateRouter.root,
              url = '';
          do {
            let childrenRoutes = currentRoute.children;
            currentRoute = null;
            
            childrenRoutes.forEach( (route : ActivatedRoute) => {
              if ( route.outlet === 'primary' ) {
                let routeSnapshot = route.snapshot;
                url +=
                    '/' +
                    routeSnapshot.url
                        .map( (segment : UrlSegment) => segment.path )
                        .join( '/' );
                this.breadcrumbs.push( {
                  label: route.snapshot.data.breadCrumb,
                  url: url,
                } );
                this.breadcrumbs = this.breadcrumbs.filter(
                    (things : IBreadCrumb, index : number, self : IBreadCrumb[]) =>
                        index ===
                        self.findIndex( (t : IBreadCrumb) => t.label === things.label )
                );
                
                currentRoute = route;
              }
            } );
          } while ( currentRoute );
        } );
  }
}
