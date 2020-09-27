import { TestBed } from '@angular/core/testing';

import { JobticketService } from './jobticket.service';

describe('JobticketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobticketService = TestBed.get(JobticketService);
    expect(service).toBeTruthy();
  });
});
