import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalPrecioViajeComponent } from './modal-precio-viaje.component';

describe('ModalPrecioViajeComponent', () => {
  let component: ModalPrecioViajeComponent;
  let fixture: ComponentFixture<ModalPrecioViajeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModalPrecioViajeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPrecioViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
