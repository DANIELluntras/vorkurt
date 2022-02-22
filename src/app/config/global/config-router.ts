import { IConfigRouter, ITmsRouter } from '../../shared/utils/interfaces';

export const routerArray = Object.freeze({
  router: [
    {
      name: 'Pull Request',
      path: 'pull_request',
    } as IConfigRouter,
    {
      name: 'Code',
      path: 'code',
    } as IConfigRouter,
    {
      name: 'Settings',
      path: 'settings',
    } as IConfigRouter,
  ],
  pageHeader: [
    {
      name: 'Issues',
      path: 'issues',
    },
    {
      name: 'Marketplace',
      path: 'marketplace',
    },
    {
      name: 'Explore',
      path: 'explore',
    },
    {
      name: 'Timer',
      path: 'timer',
    },
    {
      name: 'Transport',
      path: 'tms',
    },
  ] as IConfigRouter[],
  tms: [
    {
      name: 'Items',
      path: 'items',
      icon: 'fa_solid:pencil-alt',
    },
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon: 'fa_solid:tachometer-alt',
    },
    {
      name: 'Pickup & Collection',
      path: 'pck-collection',
      icon: 'fa_solid:truck-pickup',
    },
    {
      name: 'Shipping & Transportation',
      path: 'shp-transportation',
      icon: 'fa_solid:shipping-fast',
    },
    {
      name: 'Delivery',
      path: 'delivery',
      icon: 'fa_solid:truck-loading',
    },
    {
      name: 'Customer Support',
      path: 'ctm-support',
      icon: 'fa_solid:user-circle',
    },
    {
      name: 'Billing',
      path: 'billing',
      icon: 'fa_solid:money-bill-wave',
    },
    {
      name: '3-pl Billing',
      path: '3-pl-billing',
      icon: 'fa_solid:money-bill',
    },
    {
      name: 'Api',
      path: 'api',
      icon: 'fa_brands:quinscape',
    },
    {
      name: 'Customer & Vendor',
      path: 'customer-vendor',
      icon: 'fa_solid:warehouse',
    },
  ] as ITmsRouter[],
});
