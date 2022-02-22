export interface IActionMaterialColumn {
  iconClass: string;
  classCss: string;
  method: (row?: any) => void;
}
