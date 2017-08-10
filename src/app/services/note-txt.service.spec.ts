import { TestBed, inject } from '@angular/core/testing';

import { NoteTxtService } from './note-txt.service';

describe('NoteTxtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteTxtService]
    });
  });

  it('should be created', inject([NoteTxtService], (service: NoteTxtService) => {
    expect(service).toBeTruthy();
  }));
});
