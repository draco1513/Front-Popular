import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Riesgo2Component } from './riesgo2.component';

describe('Riesgo2Component', () => {
  let component: Riesgo2Component;
  let fixture: ComponentFixture<Riesgo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Riesgo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Riesgo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
