import { Component, inject, signal } from '@angular/core';
import { MerchService } from '../../merch.service';
import { MerchData } from './merch-model';
import { Card } from '../../Components/card/card';

@Component({
  selector: 'app-merch',
  imports: [Card],
  templateUrl: './merch.html',
  styleUrl: './merch.css',
})
export class Merch {
  title: string = 'Merch';

  private merchService = inject(MerchService);

  merch = signal<MerchData[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor() {
    this.merchService.getMerch().subscribe({
      next: (merchandise) => {
        this.merch.set(merchandise);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load merchandise.');
        this.loading.set(false);
      },
    });
  }
}
