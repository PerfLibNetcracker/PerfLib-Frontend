import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {
  book: Observable<any>;

  id: number;
  constructor(private activateRoute: ActivatedRoute, private booksService: BooksService) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.book = this.booksService.getBookInfo(String(this.id));
  }

}
