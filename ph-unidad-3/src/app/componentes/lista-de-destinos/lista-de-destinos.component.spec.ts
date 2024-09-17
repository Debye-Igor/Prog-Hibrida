import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaDeDestinosComponent } from './lista-de-destinos.component';

describe('ListaDeDestinosComponent', () => {
  let component: ListaDeDestinosComponent;
  let fixture: ComponentFixture<ListaDeDestinosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListaDeDestinosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
