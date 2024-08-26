import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListadoCitasComponent } from './listado-citas.component';

describe('ListadoCitasComponent', () => {
  let component: ListadoCitasComponent;
  let fixture: ComponentFixture<ListadoCitasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListadoCitasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
