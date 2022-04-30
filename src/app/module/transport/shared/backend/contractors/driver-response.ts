import { IDataSourceMaterialTable } from '../../../../../shared/utils/interfaces/shared/iData-source-material-table';

export interface DriverResponse {
  id: number;
  firstName: string;
  lastName: string;
  driverLicense: string;
  address: Address;
  fullName: string;
  cars: Car[];
  carsInit: IDataSourceMaterialTable<Car>[];
  index: number;
}

export interface Address {
  id: number;
  street: string;
  city: string;
}

export interface Car {
  palateNumber: string;
  reservoirFuel: string;
  kgPerWeight: number;
  id: number;
}
