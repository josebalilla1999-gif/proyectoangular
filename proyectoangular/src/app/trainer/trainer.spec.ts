import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerComponent } from './trainer';

describe('Trainer', () => {
  let component: TrainerComponent;
  let fixture: ComponentFixture<TrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
