import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BotonSearchComponent } from './boton-search.component';

describe('BotonSearchComponent', () => {
  let component: BotonSearchComponent;
  let fixture: ComponentFixture<BotonSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BotonSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BotonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
