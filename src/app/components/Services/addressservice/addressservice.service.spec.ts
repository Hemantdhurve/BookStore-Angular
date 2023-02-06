import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AddressserviceService } from './addressservice.service';

describe('AddressserviceService', () => {
  let service: AddressserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[AddressserviceService]
    });
    service = TestBed.inject(AddressserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
