export interface DataTable {
  athlete: string;
  age: number;
  country: string;
  sport: string;
  year: number;
  date: Date | String;
}

export interface IConfigRouter {
  name: string;
  path: string;
}

export interface ITimer {
  name: string;
  id: number;
}

export interface ITmsRouter extends IConfigRouter {
  icon: string;
}
