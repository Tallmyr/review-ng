import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const localUrl = 'http://localhost:8000/reviews/';

export interface ReviewTags {
  string
}
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  getReviews() {
    return this.http.get(localUrl);
  }
  getReview(id: string) {
    return this.http.get(localUrl + id);
  }
}
