import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './book';
import {BooksService} from './books.service';
import {Router} from '@angular/router';
import {Genre} from './genre';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<any>;
  genres: Observable<any>;

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.books = this.booksService.getBooksList();
    this.genres = this.booksService.getGenresList();
  }
}
