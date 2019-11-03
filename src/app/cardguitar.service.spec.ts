import { TestBed } from '@angular/core/testing';

import { CardguitarService } from './cardguitar.service';

describe('CardguitarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardguitarService = TestBed.get(CardguitarService);
    expect(service).toBeTruthy();
  });
});
