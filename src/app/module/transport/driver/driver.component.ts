import { Component, OnInit } from '@angular/core';
import { DriverService } from '../shared/services/drivers/driver.service';

@Component({
  selector: 'elix-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
  constructor(private readonly _driverService: DriverService) {}

  ngOnInit(): void {
    this._driverService.getAllDrivers$.subscribe((resp) => console.log(resp));
  }
}
