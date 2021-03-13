import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgxCommonModule } from '@ngx-extensions/extensions';
import { ReviewComponent } from './review/review.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
