import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTogglePageComponent } from './auth-toggle-page.component';

describe('AuthTogglePageComponent', () => {
  let component: AuthTogglePageComponent;
  let fixture: ComponentFixture<AuthTogglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthTogglePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthTogglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
