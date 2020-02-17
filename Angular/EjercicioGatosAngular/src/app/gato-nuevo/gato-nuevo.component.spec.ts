import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoNuevoComponent } from './gato-nuevo.component';

describe('GatoNuevoComponent', () => {
  let component: GatoNuevoComponent;
  let fixture: ComponentFixture<GatoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
