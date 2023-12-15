import { Hotel } from './hotel';
import { HotelFilter } from './hotel-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class HotelService {
  hotelList: Hotel[] = [];
  api = 'http://www.angular.at/api/hotel';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Hotel> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Hotel>(url, {params, headers});
  }

  load(filter: HotelFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.hotelList = result;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: HotelFilter): Observable<Hotel[]> {
    const params = {
      'city': filter.city,
    };

    return this.http.get<Hotel[]>(this.api, {params, headers});
  }

  save(entity: Hotel): Observable<Hotel> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Hotel>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Hotel>(url, entity, {headers, params});
    }
  }

  delete(entity: Hotel): Observable<Hotel> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Hotel>(url, {headers, params});
    }
    return EMPTY;
  }
}

