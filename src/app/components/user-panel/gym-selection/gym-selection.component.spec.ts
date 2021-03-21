import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymSelectionComponent } from './gym-selection.component';

describe('GymSelectionComponent', () => {
  let component: GymSelectionComponent;
  let fixture: ComponentFixture<GymSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
