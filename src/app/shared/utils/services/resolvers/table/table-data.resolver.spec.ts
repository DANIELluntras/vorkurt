import { TestBed } from '@angular/core/testing';

import { TableDataResolver } from './table-data.resolver';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableDataResolver', () => {
  let resolver: TableDataResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(TableDataResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
