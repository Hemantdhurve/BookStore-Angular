import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AdminloginserviceService } from './adminloginservice.service';

describe('AdminloginserviceService', () => {
  let service: AdminloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[AdminloginserviceService]
    });
    service = TestBed.inject(AdminloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
