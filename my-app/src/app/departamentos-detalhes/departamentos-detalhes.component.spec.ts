import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentosDetalhesComponent } from './departamentos-detalhes.component';

describe('DepartamentosDetalhesComponent', () => {
  let component: DepartamentosDetalhesComponent;
  let fixture: ComponentFixture<DepartamentosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentosDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
