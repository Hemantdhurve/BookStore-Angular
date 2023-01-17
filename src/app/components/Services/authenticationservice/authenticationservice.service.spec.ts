import { TestBed } from '@angular/core/testing';

import { AuthenticationserviceService } from './authenticationservice.service';

describe('AuthenticationserviceService', () => {
  let service: AuthenticationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
