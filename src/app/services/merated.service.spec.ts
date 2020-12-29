import { TestBed } from '@angular/core/testing';

import { MeratedService } from './merated.service';

describe('MeratedService', () => {
  let service: MeratedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeratedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
