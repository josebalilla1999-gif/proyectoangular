import { TestBed } from '@angular/core/testing';

import { PokemonMapperService } from './traduccion';

describe('Traduccion', () => {
  let service: PokemonMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
