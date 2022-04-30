import { DriverComponent } from '../driver.component';
import { Routes } from '@angular/router';
import { ListDriverComponent } from '../components/list-driver/list-driver.component';

export const DriverRoutesRouting: Routes = [
  {
    path: '',
    component: DriverComponent,
    children: [
      {
        path: '',
        component: ListDriverComponent,
      },
    ],
  },
];
