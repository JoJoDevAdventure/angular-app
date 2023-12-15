import { Component, OnInit } from '@angular/core';
import { HotelFilter } from '../hotel-filter';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: 'hotel-list.component.html'
})
export class HotelListComponent implements OnInit {

  filter = new HotelFilter();
  selectedHotel!: Hotel;
  feedback: any = {};

  get hotelList(): Hotel[] {
    return this.hotelService.hotelList;
  }

  constructor(private hotelService: HotelService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.hotelService.load(this.filter);
  }

  select(selected: Hotel): void {
    this.selectedHotel = selected;
  }

  delete(hotel: Hotel): void {
    if (confirm('Are you sure?')) {
      this.hotelService.delete(hotel).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
