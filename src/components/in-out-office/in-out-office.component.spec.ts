import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutOfficeComponent } from './in-out-office.component';

describe('InOutOfOfficeComponent', () => {
  let component: InOutOfficeComponent;
  let fixture: ComponentFixture<InOutOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InOutOfficeComponent]
    });
    fixture = TestBed.createComponent(InOutOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
