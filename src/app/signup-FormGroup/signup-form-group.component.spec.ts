import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormGroupComponent } from './signup-form-group.component';

describe('SignupFormComponent', () => {
  let component: SignupFormGroupComponent;
  let fixture: ComponentFixture<SignupFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupFormGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
