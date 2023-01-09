import { TestBed } from '@angular/core/testing';

import { WishlistserviceService } from './wishlistservice.service';

describe('WishlistserviceService', () => {
  let service: WishlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
