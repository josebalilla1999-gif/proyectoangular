import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teambuilder } from './teambuilder';

describe('Teambuilder', () => {
  let component: Teambuilder;
  let fixture: ComponentFixture<Teambuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teambuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(Teambuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
