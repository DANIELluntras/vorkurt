import {
  ActionConfig,
  EntityConfig,
} from 'src/app/shared/utils/interfaces/transport/configAllTransportFrame';
import { StateEnum } from 'src/app/shared/utils/enum/ButtonStatusEnum';

export const CONFIG_MAIN = Object.freeze({
  driver: {
    buttons: [
      {
        action: StateEnum.ADDED,
        exists: true,
        path: 'new-driver',
        title: 'Add new Driver',
      } as ActionConfig,
      {
        action: StateEnum.EDIT,
        exists: true,
        path: 'edit-driver',
        title: 'Edit Driver',
      } as ActionConfig,
    ],
  } as EntityConfig,
});
