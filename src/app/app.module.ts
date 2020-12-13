import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BooksComponent} from './components/books/books.component';
import {RouterModule} from '@angular/router';
import {InfoBookComponent} from './components/info-book/info-book.component';
import {NavUserComponent} from './components/nav-user/nav-user.component';
import {RegistrationComponent} from './components/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent,
    InfoBookComponent,
    NavUserComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
