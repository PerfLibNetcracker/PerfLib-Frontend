import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { MainComponent } from './components/main/main.component';
const routes: Routes = [
   { path: 'books', component: BooksComponent },
   {path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
