import { TestBed } from '@angular/core/testing';
import { HotelService } from './hotel.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HotelService', () => {
  let service: HotelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HotelService]
    });

    service = TestBed.get(HotelService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
