import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconplusComponent } from './iconplus.component';

describe('IconplusComponent', () => {
  let component: IconplusComponent;
  let fixture: ComponentFixture<IconplusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconplusComponent]
    });
    fixture = TestBed.createComponent(IconplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
