import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: 'reviews', component: ReviewsComponent },
  { path: 'review/:id', component: ReviewComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
