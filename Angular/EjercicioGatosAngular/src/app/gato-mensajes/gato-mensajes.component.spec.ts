import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoMensajesComponent } from './gato-mensajes.component';

describe('GatoMensajesComponent', () => {
  let component: GatoMensajesComponent;
  let fixture: ComponentFixture<GatoMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatoMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GatoMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
