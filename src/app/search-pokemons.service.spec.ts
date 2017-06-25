import { TestBed, inject } from '@angular/core/testing';

import { SearchPokemonsService } from './search-pokemons.service';

describe('SearchPokemonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchPokemonsService]
    });
  });

  it('should be created', inject([SearchPokemonsService], (service: SearchPokemonsService) => {
    expect(service).toBeTruthy();
  }));
});
