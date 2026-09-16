import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MerchData } from './Pages/merch/merch-model';

@Injectable({
  providedIn: 'root',
})
export class MerchService {
  private http = inject(HttpClient);
  private MERCH_ENDPOINT = 'http://localhost:3000/merchandise';

  getMerch(): Observable<MerchData[]> {
    return this.http.get<MerchData[]>(this.MERCH_ENDPOINT);
  }
}
