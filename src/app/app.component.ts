import { Component, OnDestroy, OnInit } from '@angular/core';
import {BooksService} from "./services/books.service";
import {Book} from "./model/Book";
import {TransferService} from "./services/transfer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobileWidth = false;
  searchField: string;

  constructor(private booksService: BooksService, private transferService: TransferService,
              private router: Router) {}

  getSearchFieldAndSendInTransfer(): void {
    this.transferService.setData(this.searchField);
    this.router.navigate(['/books']);
  }

  ngOnInit(): void {
    this.checkAdaptiveWidth();
    window.addEventListener('resize', this.checkAdaptiveWidth);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkAdaptiveWidth);
  }
  checkAdaptiveWidth(): void {
    this.isMobileWidth = window.innerWidth <= 900;
  }


}
