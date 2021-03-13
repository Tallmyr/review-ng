import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const localUrl = 'http://localhost:8000/reviews/';

export interface ReviewTags {
  string
}
export interface ReviewShort {
  name: string;
  text: string;
  stars: number;
  user: string;
  id: string;
  tags: ReviewTags;
}

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  getReviews() {
    return this.http.get<ReviewShort>(localUrl);
  }
}
