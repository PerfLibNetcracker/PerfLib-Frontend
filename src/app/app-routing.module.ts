import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './components/books/books.component';
import {MainComponent} from './components/main/main.component';
import {InfoBookComponent} from './components/info-book/info-book.component';

const routes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'info-book/:id', component: InfoBookComponent},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
