import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNavigationComponent } from './date-navigation.component';

describe('DateNavigationComponent', () => {
  let component: DateNavigationComponent;
  let fixture: ComponentFixture<DateNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateNavigationComponent]
    });
    fixture = TestBed.createComponent(DateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
