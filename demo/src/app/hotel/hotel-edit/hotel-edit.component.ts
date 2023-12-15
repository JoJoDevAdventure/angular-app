import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-hotel-edit',
  templateUrl: './hotel-edit.component.html'
})
export class HotelEditComponent implements OnInit {

  id!: string;
  hotel!: Hotel;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new Hotel()); }
          return this.hotelService.findById(id);
        })
      )
      .subscribe({
        next: hotel => {
          this.hotel = hotel;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.hotelService.save(this.hotel).subscribe({
      next: hotel => {
        this.hotel = hotel;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/hotels']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/hotels']);
  }
}
