import { Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';

export const HOTEL_ROUTES: Routes = [
  {
    path: 'hotels',
    component: HotelListComponent
  },
  {
    path: 'hotels/:id',
    component: HotelEditComponent
  }
];
