import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteprimaCommessaComponent } from './anteprima-commessa.component';

describe('CommessaComponent', () => {
  let component: AnteprimaCommessaComponent;
  let fixture: ComponentFixture<AnteprimaCommessaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnteprimaCommessaComponent]
    });
    fixture = TestBed.createComponent(AnteprimaCommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
