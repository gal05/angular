import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinSalidaComponent } from './sin-salida.component';

describe('SinSalidaComponent', () => {
  let component: SinSalidaComponent;
  let fixture: ComponentFixture<SinSalidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinSalidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinSalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
