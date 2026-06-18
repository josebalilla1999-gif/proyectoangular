import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemondetail } from './pokemondetail';

describe('Pokemondetail', () => {
  let component: Pokemondetail;
  let fixture: ComponentFixture<Pokemondetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokemondetail],
    }).compileComponents();

    fixture = TestBed.createComponent(Pokemondetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
