import { TestBed } from '@angular/core/testing';

import { LoadDriversResolver } from './load-drivers.resolver';

describe('LoadDriversResolver', () => {
  let resolver: LoadDriversResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadDriversResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
