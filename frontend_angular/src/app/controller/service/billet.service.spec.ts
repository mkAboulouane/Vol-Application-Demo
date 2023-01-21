import { TestBed } from '@angular/core/testing';
import { BilletService } from './billet.service';

describe('BilletService', () => {
  let service: BilletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

