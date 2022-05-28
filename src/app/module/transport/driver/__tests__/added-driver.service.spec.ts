import { TestBed } from '@angular/core/testing';

import { AddedDriverService } from '../common/utils/services/added-driver.service';

describe('AddedDriverService', () => {
  let service: AddedDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
