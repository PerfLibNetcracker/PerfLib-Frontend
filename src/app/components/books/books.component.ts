import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../model/Book';
import { Genre } from '../../model/Genre';
import { Author } from '../../model/Author';
import {TransferService} from '../../services/transfer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  genres: Genre[];
  authors: Author[];
  searchField: string;


  constructor(private booksService: BooksService, private transferService: TransferService,
              private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.booksService.getGenresList().subscribe((next) => (this.genres = next));
    this.booksService
      .getAuthorsList()
      .subscribe((next) => (this.authors = next));
    this.searchField = this.transferService.getData();
    if (this.searchField != null) {
      console.log(this.searchField);
      this.getAllBookByBookName(this.searchField);
    } else {
      this.booksService.getBooksList().subscribe((next) => (this.books = next));
    }
  }


  getAllBookByGenres(authorName: string): void {
    this.booksService.getBooksListByGenre(authorName).subscribe((next) => (this.books = next));
  }

  getAllBookByBookName(bookName: string): void {
    this.booksService.getBooksListByBookNameOrAuthorName(bookName).subscribe((next) => (this.books = next));
    console.log(this.books);
  }

}
