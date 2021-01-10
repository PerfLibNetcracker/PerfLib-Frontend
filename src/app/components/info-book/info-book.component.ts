import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Observable, timer} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {MeratedService} from '../../services/merated.service';
import {Book} from '../../model/Book';
import {SubscriptionService} from '../../services/subscription.service';
import {BoughtService} from "../../services/bought.service";


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

  bookWithNewRat: Book;

  bookDTO: Observable<any>;

  userDTO: Observable<any>;

  userForUsername: Observable<any>;

  userForBoughtDTO: Observable<any>;

  constructor(private activateRoute: ActivatedRoute, private booksService: BooksService, private authService: AuthService, private meratedService: MeratedService,
              private router: Router, private subscriptionService: SubscriptionService, private boughtService: BoughtService) {
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
    this.router.navigate(['/info-book/' + this.id]);
    this.reloadData();
  }

  reloadData() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn) {
      this.userForUsername = this.authService.getLoggedInUserName();
      this.userDTO = this.subscriptionService.checkSubscription();
      this.bookDTO = this.meratedService.getInfoAboutRated(String(this.id));
      this.userForBoughtDTO = this.boughtService.getInfoAboutBoughtBooks(String(this.id));
    }
    this.book = this.booksService.getBookInfo(String(this.id));
  }

  onSubmitButtonBuy(): void {
    this.boughtService.userDoBuy(String(this.id)).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    this.reloadData();
    this.router.navigate(['/info-book/' + this.id]);
    this.reloadData();
  }

  onSubmitButtonBuyBySubscription(): void {
    this.boughtService.userDoBuyBySubscription(String(this.id)).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    this.reloadData();
    this.router.navigate(['/info-book/' + this.id]);
    this.reloadData();
  }

}
