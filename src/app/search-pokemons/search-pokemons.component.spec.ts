import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonsComponent } from './search-pokemons.component';

describe('SearchPokemonsComponent', () => {
  let component: SearchPokemonsComponent;
  let fixture: ComponentFixture<SearchPokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
