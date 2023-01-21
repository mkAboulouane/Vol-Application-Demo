import { TestBed } from '@angular/core/testing';
import { SiegeService } from './siege.service';

describe('SiegeService', () => {
  let service: SiegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

