import { Component, OnInit } from '@angular/core';
import { ReviewService, ReviewShort } from '../review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews;

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewService.getReviews().subscribe((data: ReviewShort) => {
      console.log(data);
      this.reviews = data;
    });
  }
}
