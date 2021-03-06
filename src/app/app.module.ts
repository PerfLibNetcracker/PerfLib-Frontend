import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './components/books/books.component';
import { RouterModule } from '@angular/router';
import { InfoBookComponent } from './components/info-book/info-book.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpinterceptorService } from './services/httpinterceptor.service';
import { NavBucketComponent } from './components/nav-bucket/nav-bucket.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { BuyFormComponent } from './components/buy-form/buy-form.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent,
    InfoBookComponent,
    NavUserComponent,
    RegistrationComponent,
    NavBucketComponent,
    SubscriptionsComponent,
    BuyFormComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
