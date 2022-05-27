import { StateEnum } from 'src/app/shared/utils/enum/ButtonStatusEnum';
export interface ActionConfig {
  exists: boolean;
  path: String;
  title: String;
  action: StateEnum;
}

export interface EntityConfig {
  buttons: ActionConfig[];
}
