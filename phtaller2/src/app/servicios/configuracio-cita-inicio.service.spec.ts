import { TestBed } from '@angular/core/testing';

import { ConfiguracioCitaInicioService } from './configuracio-cita-inicio.service';

describe('ConfiguracioCitaInicioService', () => {
  let service: ConfiguracioCitaInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracioCitaInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
