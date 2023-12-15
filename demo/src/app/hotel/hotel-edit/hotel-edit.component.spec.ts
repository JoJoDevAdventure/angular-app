import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HotelEditComponent } from './hotel-edit.component';
import { HotelService } from '../hotel.service';

describe('HotelEditComponent', () => {
  let component: HotelEditComponent;
  let fixture: ComponentFixture<HotelEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HotelEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [HotelService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
