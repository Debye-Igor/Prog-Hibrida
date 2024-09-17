import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PruebaModalComponent } from './prueba-modal.component';

describe('PruebaModalComponent', () => {
  let component: PruebaModalComponent;
  let fixture: ComponentFixture<PruebaModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PruebaModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PruebaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
