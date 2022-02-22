import { TestBed } from '@angular/core/testing';

import { DataTableService } from './data-table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataTableService', () => {
  let service: DataTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
