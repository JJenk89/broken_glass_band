import { Component, inject, signal } from '@angular/core';
import { MerchService } from '../../merch.service';
import { MerchData } from '../../Pages/merch/merch-model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
    private merchService = inject(MerchService);
  
    merch = signal<MerchData[]>([]);

    addToCart(item: MerchData) {
      console.log(`${item.name} with id: ${item.id} added to cart!`);
    }
  
    constructor() {
      this.merchService.getMerch().subscribe({
        next: (merchandise) => {
          this.merch.set(merchandise);
        }
      });
    }
}
