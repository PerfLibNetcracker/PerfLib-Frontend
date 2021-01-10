import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { MainComponent } from './components/main/main.component';
import {InfoBookComponent} from './components/info-book/info-book.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {NavUserComponent} from './components/nav-user/nav-user.component';
import {SubscriptionsComponent} from './components/subscriptions/subscriptions.component';
import {BuyFormComponent} from './components/buy-form/buy-form.component';

const routes: Routes = [
   {path: 'books', component: BooksComponent },
   {path: '', component: MainComponent },
   {path: 'info-book/:id', component: InfoBookComponent},
   {path: 'registration', component: RegistrationComponent},
   {path: 'nav-user', component: NavUserComponent},
   {path: 'subscriptions', component: SubscriptionsComponent},
   {path: 'buy', component: BuyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
