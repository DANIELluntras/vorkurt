import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Car,
  DriverResponse,
} from 'src/app/module/transport/shared/backend/contractors/driver-response';
import { IDataSourceMaterialTable } from 'src/app/shared/utils/interfaces/shared/iData-source-material-table';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'elix-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.scss'],
})
export class ListDriverComponent implements OnInit {
  public dataSourceDrivers: DriverResponse[] | any;
  public selectedDriver$: BehaviorSubject<IDataSourceMaterialTable<DriverResponse> | null>;
  public selectedIndexDriver: number;

  constructor(private readonly _activate: ActivatedRoute) {
    this.selectedDriver$ =
      new BehaviorSubject<IDataSourceMaterialTable<DriverResponse> | null>(
        null
      );
  }

  ngOnInit(): void {
    this.selectedIndexDriver = null;
    this.selectedDriver$.next(null);
    this.dataSourceDrivers = this._activate.snapshot.data.drivers.map(
      (driver: DriverResponse, index: number) => {
        const model = <DriverResponse>driver;
        model.carsInit = this._initCarShared(driver.cars);
        model.index = index;
        return {
          actions: this._openCar(),
          editable: false,
          model: {
            ...model,
            cars: driver.cars.map((resp) => (resp ? resp : '')),
            address:
              driver.address.street + ' ( ' + driver.address.city + ' ) ',
          },
        } as IDataSourceMaterialTable<any>;
      }
    );
  }

  private _initCarShared(cars: Car[]) {
    if (!cars) {
      return [];
    }
    const carsDataSource: IDataSourceMaterialTable<Car>[] = cars.map(
      (car: Car) => {
        return {
          model: car,
          editable: false,
          actions: this._newCar(),
        };
      }
    );
    return carsDataSource;
  }

  private _openCar() {
    return [
      {
        iconClass: 'fa_solid:stethoscope',
        classCss: 'check',
        method: (resp: IDataSourceMaterialTable<DriverResponse>) => {
          this._findDriver(resp);
        },
      },
    ];
  }
  private _newCar() {
    return [
      {
        iconClass: 'fa_solid:stethoscope',
        classCss: 'check',
        method: () => {},
      },
    ];
  }

  private _findDriver(driver: IDataSourceMaterialTable<DriverResponse>) {
    if (driver) {
      const selectedIndexDriver = this.dataSourceDrivers.findIndex(
        (dataSource: IDataSourceMaterialTable<DriverResponse>) =>
          dataSource.model == driver.model
      );
      this.selectedIndexDriver = selectedIndexDriver;
      this.selectedDriver$.next(this.dataSourceDrivers[selectedIndexDriver]);
    }
  }
}
