import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from './../environments/environment';

const baseUrl = environment.apiUrl;

export interface ReviewTags {
  string
}
@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  getReviews() {
    return this.http.get(baseUrl);
  }
  getReview(id: string) {
    return this.http.get(baseUrl + id);
  }
}
