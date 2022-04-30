import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Car,
  DriverResponse,
} from 'src/app/module/transport/shared/backend/contractors/driver-response';
import { IDataSourceMaterialTable } from 'src/app/shared/utils/interfaces/shared/iData-source-material-table';
import { BehaviorSubject } from 'rxjs';
import { SpinnerStateService } from '../../../../../shared/component';

@Component({
  selector: 'elix-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListDriverComponent implements OnInit {
  public dataSourceDrivers: DriverResponse[] | any;
  public selectedDriver$: BehaviorSubject<IDataSourceMaterialTable<DriverResponse> | null>;
  public selectedIndexDriver: number;

  constructor(
    private readonly _activate: ActivatedRoute,
    private spinnerStateService: SpinnerStateService
  ) {
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
        this.spinnerStateService.setStateBehaviorSpinner(false);
        return {
          actions:
            driver.cars.length <= 0
              ? () => {}
              : this._openCar(driver.cars.length),
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

  private _openCar(cars: number) {
    return [
      {
        iconClass: 'fa_solid:stethoscope',
        classCss: 'driver__existing',
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
