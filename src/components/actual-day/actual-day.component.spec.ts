import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDayComponent } from './actual-day.component';

describe('ActualDayComponent', () => {
  let component: ActualDayComponent;
  let fixture: ComponentFixture<ActualDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualDayComponent]
    });
    fixture = TestBed.createComponent(ActualDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
