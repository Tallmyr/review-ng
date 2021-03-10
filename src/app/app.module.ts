import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NgxCommonModule } from '@ngx-extensions/extensions';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
