import { DataSourceMaterialTable } from 'src/app/shared/utils/interfaces/shared/data-source-material-table';
import { FormArray } from '@angular/forms';

export interface Driver {
  id: number;
  firstName: string;
  lastName: string;
  driverLicense: string;
  address: Address;
  fullName: string;
  cars: Car[];
  carsInit: DataSourceMaterialTable<Car>[];
  index: number;
}

export interface Address {
  id: number;
  street: string;
  city: string;
  number: any;
  postalCode: any;
}

export interface Car {
  id: number;
  plateNumber: string;
  reservoirFuel: string;
  kgPerWeight: number;
  numberPacks?: number;
  packages: FormArray;
}

export interface Package {
  consignee: Consignee;
  note: string;
  typeBox: TypeBox;
  refoundType: RefoundType;
  packageAddress: PackageAddress;
  repayment: boolean;
}

export interface Consignee {
  street: string;
  city: string;
  numberHouse: number;
  postalCode: string;
  apartment: number;
}

export interface TypeBox {
  envelop: boolean;
}

export interface RefoundType {
  toRecipient: boolean;
  toSender: boolean;
}

export interface PackageAddress {
  street?: string;
  city?: string;
  number?: number;
  postalCode?: string;
}
