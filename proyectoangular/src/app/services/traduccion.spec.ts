import { TestBed } from '@angular/core/testing';

import { Traduccion } from './traduccion';

describe('Traduccion', () => {
  let service: Traduccion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Traduccion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
