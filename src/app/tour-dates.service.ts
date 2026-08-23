import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TourDates } from './Pages/tour/tour-model';

@Injectable({
  providedIn: 'root',
})
export class TourDatesService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/tourDates';

  getTourDates(): Observable<TourDates[]> {
    return this.http.get<TourDates[]>(this.apiUrl);
  }
}
