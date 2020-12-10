import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<any>;
  genres: Observable<any>;

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.books = this.booksService.getBooksList();
    this.genres = this.booksService.getGenresList();
  }
}
