import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoCommessaComponent } from './inserimento-commessa.component';

describe('InserimentoCommessaComponent', () => {
  let component: InserimentoCommessaComponent;
  let fixture: ComponentFixture<InserimentoCommessaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserimentoCommessaComponent]
    });
    fixture = TestBed.createComponent(InserimentoCommessaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
