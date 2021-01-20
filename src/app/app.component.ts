import { Component, OnDestroy, OnInit } from '@angular/core';
import {BooksService} from "./services/books.service";
import {Book} from "./model/Book";
import {TransferService} from "./services/transfer.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  getSearchFieldAndRouteToAllBooks(): void {
    this.transferService.setData(this.searchField);
    this.router.navigateByUrl('/nav-user', {skipLocationChange: true}).then(() => this.router.navigate(['books']));
  }

  routeToMain(): void {
    this.router.navigateByUrl('/nav-user', {skipLocationChange: true}).then(() => this.router.navigate(['']));
  }

  routeToPopularBooks(): void {
    this.router.navigateByUrl('/nav-user', {skipLocationChange: true}).then(() => this.router.navigate(['books/popular']));
  }

  routeToNewBooks(): void {
    this.router.navigateByUrl('/nav-user', {skipLocationChange: true}).then(() => this.router.navigate(['books/new']));
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
