import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPartComponent } from './sign-in-part.component';

describe('SignInPartComponent', () => {
  let component: SignInPartComponent;
  let fixture: ComponentFixture<SignInPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
