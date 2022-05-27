import { DriverComponent } from '../driver.component';
import { Routes } from '@angular/router';
import { ListDriverComponent } from '../components/list-driver/list-driver.component';
import { AllFrameSharedComponent } from 'src/app/shared/component/all-frame-shared/all-frame-shared.component';
import { CONFIG_MAIN } from 'src/@core/config/routing-main';
import { AddedDriverComponent } from '../components/added-driver/added-driver.component';

export const DriverRoutesRouting: Routes = [
  {
    path: '',
    component: AllFrameSharedComponent,
    data: { config: CONFIG_MAIN.driver },
    children: [
      {
        path: '',
        component: DriverComponent,
        children: [
          {
            path: '',
            component: ListDriverComponent,
          },
          {
            path: 'new-driver',
            component: AddedDriverComponent,
          },
        ],
      },
    ],
  },
];
