import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OrderserviceService } from './orderservice.service';

describe('OrderserviceService', () => {
  let service: OrderserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[OrderserviceService]
    });
    service = TestBed.inject(OrderserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
