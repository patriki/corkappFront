import { TestBed, inject } from '@angular/core/testing';

import { CorkService } from './cork.service';

describe('CorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CorkService]
    });
  });

  it('should be created', inject([CorkService], (service: CorkService) => {
    expect(service).toBeTruthy();
  }));
});
