import { TestBed } from '@angular/core/testing';
import { CompagnieService } from './compagnie.service';

describe('CompagnieService', () => {
  let service: CompagnieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompagnieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

