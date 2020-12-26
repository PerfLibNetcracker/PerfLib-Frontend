import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {MeratedService} from '../../services/merated.service';
import {BookDTO} from '../../model/bookDTO';
import {User} from "../../model/user";
import {Book} from "../../model/Book";


@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css']
})
export class InfoBookComponent implements OnInit {
  book: Observable<any>;

  isLoggedIn: boolean;

  id: number;

  rated: number;

  // @ts-ignore
  bookWithNewRat: Book;

  bookDTO: Observable<any>;

  constructor(private activateRoute: ActivatedRoute, private booksService: BooksService, private authService: AuthService, private meratedService: MeratedService,
              private router: Router) {
    this.id = activateRoute.snapshot.params.id;
  }


  ngOnInit(): void {
    this.reloadData();
  }

  newrat(): void {
    this.bookWithNewRat = new Book(this.rated);
    this.meratedService.setNewRatForBook(this.bookWithNewRat, String(this.id)).subscribe(data => {
        console.log(data);
        this.bookWithNewRat = new Book(this.rated);
      },
      error => console.log(error));
  }


  onSubmit(): void {
    this.newrat();
    this.reloadData();
  }


  reloadData() {
    this.book = this.booksService.getBookInfo(String(this.id));
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn) {
      this.bookDTO = this.meratedService.getInfoAboutRated(String(this.id));
      console.log(this.authService.getLoggedInUserName());
      console.log(this.bookDTO);
    }
  }

}
