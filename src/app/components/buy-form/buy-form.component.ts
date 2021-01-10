import { Component, OnInit } from '@angular/core';
import {BooksService} from '../../services/books.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {

  book: Observable<any>;
  id: number;

  constructor(private booksService: BooksService, activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.booksService.getBookInfo(String(this.id));
  }

}
