import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from '../../services/books.service';
import {Book} from '../../model/Book';

const getPaginationFactor = (width: number) => {
  if (width >= 1260) {
    return 5;
  }
  if (width >= 900) {
    return 4;
  }
  if (width >= 700) {
    return 3;
  }
  if (width >= 510) {
    return 2;
  } else {
    return 1;
  }
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  constructor(private booksService: BooksService) {
  }

  items: Book[] = [];

  numberOfSlides = this.items.length;
  totalPaginationPixels = window.innerWidth - 97;
  pages = Math.ceil(
    this.numberOfSlides / getPaginationFactor(this.totalPaginationPixels)
  );
  scrollBy = getPaginationFactor(this.totalPaginationPixels);
  arrPages = new Array(this.pages).fill(0).map((_, index) => index + 1);
  offset = 0;
  atStart = this.offset === 0;
  atEnd = this.offset === this.totalPaginationPixels * (this.pages - 1) * -1;
  currentPage = 1;

  sortedItems = this.arrPages.map((item, index) => {
    return this.items.slice(index * this.scrollBy, item * this.scrollBy);
  });

  initSlider(): void {
    this.numberOfSlides = this.items.length;
    this.totalPaginationPixels = window.innerWidth - 97;
    this.pages = Math.ceil(
      this.numberOfSlides / getPaginationFactor(this.totalPaginationPixels)
    );
    this.scrollBy = getPaginationFactor(this.totalPaginationPixels);
    this.arrPages = new Array(this.pages).fill(0).map((_, index) => index + 1);
    this.offset = 0;
    this.atStart = this.offset === 0;
    this.atEnd = this.offset === this.totalPaginationPixels * (this.pages - 1) * -1;
    this.currentPage = 1;

    this.sortedItems = this.arrPages.map((item, index) => {
      return this.items.slice(index * this.scrollBy, item * this.scrollBy);
    });
  }

  ngOnInit(): void {
    window.addEventListener('resize', this.resizeUpdate);
    this.booksService.getBooksList().subscribe((data) => {
      this.items = data;
      this.initSlider();
    });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeUpdate);
  }

  getTransformStyles = () => {
    return {transform: `translateX(${this.offset}px)`};
  }

  getSpanStyles = (page: number) => {
    return {
      backgroundColor: `${page === this.currentPage ? 'red' : '#525665'}`,
    };
  }

  resizeUpdate = () => {
    if (this.numberOfSlides === 0) {
      return;
    }
    this.totalPaginationPixels = window.innerWidth - 97;
    this.pages = Math.ceil(
      this.numberOfSlides / getPaginationFactor(this.totalPaginationPixels)
    );
    if (this.currentPage > this.pages) {
      this.currentPage = this.pages;
    }
    this.offset = this.totalPaginationPixels * (this.currentPage - 1) * -1;
    this.arrPages = new Array(this.pages).fill(0).map((_, index) => index + 1);
    this.atStart = this.offset === 0;
    this.atEnd =
      this.offset === this.totalPaginationPixels * (this.pages - 1) * -1;
    this.scrollBy = getPaginationFactor(this.totalPaginationPixels);
    this.sortedItems = this.arrPages.map((item, index) => {
      return this.items.slice(index * this.scrollBy, item * this.scrollBy);
    });
  }

  move = (direction: number) => {
    if (direction > 0 && !this.atEnd) {
      this.offset -= this.totalPaginationPixels;
    } else if (direction < 0 && !this.atStart) {
      this.offset += this.totalPaginationPixels;
    }
    this.atStart = this.offset === 0;
    this.atEnd =
      this.offset === this.totalPaginationPixels * (this.pages - 1) * -1;
    this.currentPage =
      -1 * Math.round(this.offset / this.totalPaginationPixels - 1);
  }
}
