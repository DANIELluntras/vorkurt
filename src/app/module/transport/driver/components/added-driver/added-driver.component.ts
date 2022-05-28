import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SpinnerStateService } from 'src/app/shared/component';
import {
  Car,
  Consignee,
  DataSourceMaterialTable,
  Driver,
  PackageAddress,
  TypeBox,
} from 'src/app/shared/utils/interfaces';
import { AddedDriverService } from '../../common/utils/services/added-driver.service';

@Component({
  selector: 'elix-added-driver',
  templateUrl: './added-driver.component.html',
  styleUrls: ['./added-driver.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddedDriverComponent implements OnInit {
  public driverForm: FormGroup;
  public dataSourceCars: DataSourceMaterialTable<Car>[];
  public carId: number = null;

  constructor(
    private readonly _addedDriver: AddedDriverService,
    private readonly _spinnerStateService: SpinnerStateService,
    private readonly _fb: FormBuilder
  ) {}

  get cars(): FormArray {
    return this.driverForm?.get('cars') as FormArray;
  }

  packages(index: number): FormArray {
    return <FormArray>this.cars?.at(index)?.get('packages');
  }

  public ngOnInit(): void {
    this._spinnerStateService.setStateBehaviorSpinner(false);
    this._initForm();
    this._initDriverData();
  }

  public sendValues(): void {
    this._setDataInCarForm();
    this._addedDriver
      .addedDriver(this.driverForm.value)
      .subscribe((resp: Driver) => {});
  }

  public addCar() {
    if (this.dataSourceCars) {
      this._setDataInCarForm();
    }
    this._pushedDataInCarForm();
  }

  private _pushedDataInCarForm(): void {
    this.cars.push(this._fb.group(this._initCarGroup()));
  }

  private _initForm() {
    this._initDriverForm();
  }

  private _setDataInCarForm(): void {
    this.dataSourceCars = this.dataSourceCars.map(
      (resp: DataSourceMaterialTable<Car>) => {
        this.cars.at(resp.model.id).setValue(resp.model);
        return resp;
      }
    );
  }

  private _initDriverForm() {
    this.driverForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      driverLicense: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        number: new FormControl(0),
        postalCode: new FormControl(''),
      }),
      cars: new FormArray([]),
    });
  }

  private _initDriverData() {
    this.driverForm.valueChanges.subscribe(() => {
      this.dataSourceCars = this.cars.controls.map((car: any) => {
        const model = <Car>(<unknown>car.value);
        return {
          actions: this._addNewPackage(model.id),
          editable: true,
          model: {
            ...model,
          },
        } as DataSourceMaterialTable<Car>;
      });
    });
    this._spinnerStateService.setStateBehaviorSpinner(false);
  }

  private _addNewPackage(carId: number) {
    return [
      {
        iconClass: 'fa_solid:stethoscope',
        classCss: 'driver__existing',
        method: (resp: DataSourceMaterialTable<Car>) => {
          (<FormArray>this.cars.at(resp.model.id)?.get('packages')).push(
            this._fb.group(this._emptyPackage())
          );

          this.carId = carId;
        },
      },
    ];
  }

  private _initCarGroup() {
    return {
      id: this.cars.length,
      plateNumber: '',
      reservoirFuel: '',
      kgPerWeight: 0,
      packages: this._fb.array([]),
    } as Car;
  }

  private _emptyPackage() {
    return {
      note: 'TEst',
      typeBox: this._fb.group({ envelop: false } as TypeBox),
      refoundType: this._fb.group({ toRecipient: false }),
      packageAddress: this._fb.group(this._initPackageAddress()),
      consignee: this._fb.group(this._initCarGroup()),
      repayment: false,
    };
  }

  private _initPackageAddress(): PackageAddress {
    return {
      street: '',
      city: '',
      number: 0,
      postalCode: '',
    } as PackageAddress;
  }

  private _initConsignee(): Consignee {
    return {
      street: '',
      city: '',
      numberHouse: null,
      postalCode: '',
      apartment: null,
    };
  }
}
