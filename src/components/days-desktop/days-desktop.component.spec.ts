import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysDesktopComponent } from './days-desktop.component';

describe('DaysDesktopComponent', () => {
  let component: DaysDesktopComponent;
  let fixture: ComponentFixture<DaysDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaysDesktopComponent]
    });
    fixture = TestBed.createComponent(DaysDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
