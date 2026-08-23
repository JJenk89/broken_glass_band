import { Component, inject, signal } from '@angular/core';
import { TourDatesService } from '../../tour-dates.service';
import { TourDates } from './tour-model';

@Component({
  selector: 'app-tour',
  imports: [],
  templateUrl: './tour.html',
  styleUrl: './tour.css',
})
export class Tour {
  title: string = 'Tour Dates';

  private tourDatesService = inject(TourDatesService);

  tourDates = signal<TourDates[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor() {
    this.tourDatesService.getTourDates().subscribe({
      next: (dates) => {
        this.tourDates.set(dates);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load tour dates.');
        this.loading.set(false);
      },
    });
  }
}
