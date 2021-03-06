import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Observable, timer } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { RatingService } from '../../services/rating.service';
import { Book } from '../../model/Book';
import { SubscriptionService } from '../../services/subscription.service';
import { BoughtService } from '../../services/bought.service';
import { Track } from 'ngx-audio-player';
import { BookRatedDTO } from 'src/app/model/BookRatedDTO';
import { UserInfoDTO } from 'src/app/model/UserInfoDTO';
import { UserBoughtBooksDTO } from 'src/app/model/UserBoughtDTO';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-info-book',
  templateUrl: './info-book.component.html',
  styleUrls: ['./info-book.component.css'],
})
export class InfoBookComponent implements OnInit {
  book: Observable<Book>;

  isLoggedIn: boolean;

  id: number;

  rating: number;

  bookWithNewRat: Book;

  bookDTO: Observable<BookRatedDTO>;

  userDTO: Observable<UserInfoDTO>;

  userBoughtDTO: Observable<UserBoughtBooksDTO>;

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Аудио версия книги',
      link: 'assets/mp3/01-01.mp3',
    },
  ];

  constructor(
    private activateRoute: ActivatedRoute,
    private booksService: BooksService,
    private authService: AuthService,
    private RatingService: RatingService,
    private router: Router,
    private subscriptionService: SubscriptionService,
    private boughtService: BoughtService
  ) {
    this.id = activateRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.reloadData();
  }

  newrat(): void {
    this.bookWithNewRat = new Book(this.rating);
    this.RatingService.setNewRatingForBook(
      this.bookWithNewRat,
      String(this.id)
    ).subscribe(
      (data) => {
        console.log(data);
        this.bookWithNewRat = new Book(this.rating);
      },
      (error) => console.log(error)
    );
    this.RatingService.postFeedbackToRecommends(
      String(this.id),
      this.rating
    )
  }

  onSubmit(): void {
    this.newrat();
    this.reloadData();
    this.router.navigate([`/info-book/${this.id}`]);
    this.reloadData();
    //TODO(Kuptsov) MAJOR: Это хотфикс, тут должно быть правильное обновление содержимого
    window.location.reload();
  }

  reloadData(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.userDTO = this.subscriptionService.getUserInfo();
      this.bookDTO = this.RatingService.getInfoAboutRating(String(this.id));
      this.userBoughtDTO = this.boughtService.getInfoAboutBoughtBooks(
        String(this.id)
      );
    }
    this.book = this.booksService.getBookInfo(String(this.id));
  }

  onSubmitButtonBuy(): void {
    this.boughtService.buyBook(String(this.id)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    // TODO(Kuptsov) MAJOR: Это обновление либо не работает, либо работает как-то неправильно
    //  статус покупки не обновляется прямо на странице сразу
    this.reloadData();
    this.router.navigate([`/info-book/${this.id}`]);
    this.reloadData();
    //TODO(Kuptsov) MAJOR: Это хотфикс, тут должно быть правильное обновление содержимого
    window.location.reload();
  }

  onSubmitButtonBuyBySubscription(): void {
    this.boughtService.buyBookBySubscription(String(this.id)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    // TODO(Kuptsov) MAJOR: Это обновление либо не работает, либо работает как-то неправильно
    //  статус покупки не обновляется прямо на странице сразу
    this.reloadData();
    this.router.navigate([`/info-book/${this.id}`]);
    this.reloadData();
    //TODO(Kuptsov) MAJOR: Это хотфикс, тут должно быть правильное обновление содержимого
    window.location.reload();
  }
}
