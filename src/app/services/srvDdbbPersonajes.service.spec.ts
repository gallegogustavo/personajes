/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrvDdbbPersonajesService } from './srvDdbbPersonajes.service';

describe('Service: SrvDdbbPersonajes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrvDdbbPersonajesService]
    });
  });

  it('should ...', inject([SrvDdbbPersonajesService], (service: SrvDdbbPersonajesService) => {
    expect(service).toBeTruthy();
  }));
});
