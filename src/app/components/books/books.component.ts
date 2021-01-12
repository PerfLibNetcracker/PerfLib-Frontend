import {Component, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Book} from '../../model/Book';
import {Genre} from '../../model/Genre';
import {Author} from '../../model/Author';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  genres: Genre[];
  authors: Author[];

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getBooksList().subscribe(next => this.books = next);
    this.booksService.getGenresList().subscribe(next => this.genres = next);
    this.booksService.getAuthorsList().subscribe(next => this.authors = next);
  }
}
