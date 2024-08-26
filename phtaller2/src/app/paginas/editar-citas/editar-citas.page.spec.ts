import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCitasPage } from './editar-citas.page';

describe('EditarCitasPage', () => {
  let component: EditarCitasPage;
  let fixture: ComponentFixture<EditarCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
