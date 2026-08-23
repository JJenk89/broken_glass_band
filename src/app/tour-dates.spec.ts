import { TestBed } from '@angular/core/testing';

import { TourDatesService } from './tour-dates.service';

describe('TourDatesService', () => {
  let service: TourDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
