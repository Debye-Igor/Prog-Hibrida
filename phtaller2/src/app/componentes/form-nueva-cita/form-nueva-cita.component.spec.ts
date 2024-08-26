import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormNuevaCitaComponent } from './form-nueva-cita.component';

describe('FormNuevaCitaComponent', () => {
  let component: FormNuevaCitaComponent;
  let fixture: ComponentFixture<FormNuevaCitaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormNuevaCitaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormNuevaCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
