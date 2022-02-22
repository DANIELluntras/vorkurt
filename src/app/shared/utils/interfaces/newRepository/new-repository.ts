export interface INewRepository {
  template: string;
  id: string;
  check: boolean;
  icon: string;
}

export interface IWrapperRepository {
  template: string;
  owner: string;
  repositoryName: string;
  description?: string;
  available: boolean;
}
