import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { TransportFrameComponent } from './transport-frame.component';
import { routerArray }             from '../../config/global/config-router';
import { PlBillingResolver }       from '../../shared/utils/services/resolvers/pl-billing/pl-billing.resolver';

const routes : Routes = [
  {
    path: '',
    component: TransportFrameComponent,
    data: { data: routerArray.tms },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then( (m) => m.DashboardModule ),
        data: {
          breadCrumb: 'Dashboard',
        },
      },
      {
        path: 'item',
        loadChildren: () =>
            import('./item/item.module').then( (m) => m.ItemModule ),
      },
      {
        path: 'pck-collection',
        loadChildren: () =>
            import('./pickup-collection/pickup-collection.module').then(
                (m) => m.PickupColectionModule
            ),
        data: {
          breadCrumb: 'Package Collection',
        },
      },
      {
        path: 'shp-transportation',
        loadChildren: () =>
            import(
                './shipping-transportation/shipping-transportation.module'
                ).then( (m) => m.ShippingTransportationModule ),
        data: {
          breadCrumb: 'Ship Transportation',
        },
      },
      {
        path: 'delivery',
        loadChildren: () =>
            import('./delivery/delivery.module').then( (m) => m.DeliveryModule ),
        data: {
          breadCrumb: 'Delivery',
        },
      },
      {
        path: 'ctm-support',
        loadChildren: () =>
            import('./customer-support/customer-support.module').then(
                (m) => m.CustomerSupportModule
            ),
        data: {
          breadCrumb: 'Ctm Support',
        },
      },
      {
        path: 'billing',
        loadChildren: () =>
            import('./billing/billing.module').then( (m) => m.BillingModule ),
        data: {
          breadCrumb: 'Billing',
        },
      },
      {
        path: '3-pl-billing',
        loadChildren: () =>
            import('./pl-billing/pl-billing.module').then(
                (m) => m.PlBillingModule
            ),
        resolve: {
          coins: PlBillingResolver,
        },
        data: {
          breadCrumb: 'pl-billing',
        }
      },
      {
        path: 'api',
        loadChildren: () => import('./api/api.module').then( (m) => m.ApiModule ),
      },
      {
        path: 'customer-vendor',
        loadChildren: () =>
            import('./customer-vendor/customer-vendor.module').then(
                (m) => m.CustomerVendorModule
            ),
        data: {
          breadCrumb: 'Customer Vendor',
        },
      },
    ],
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class AppTransportRouting {
}
