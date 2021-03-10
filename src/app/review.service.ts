import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const localUrl = 'http://localhost:8000/reviews';

export interface ReviewShort {
  id: string;
  name: string;
  user: string;
  short: string;
  stars: number;
}


@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  getReviews() {
    return this.http.get<ReviewShort>('http://127.0.0.1:8000/reviews');
    
  }
}
