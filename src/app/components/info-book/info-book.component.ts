import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../../services/books.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.service';
import {MeratedService} from '../../services/merated.service';
import {BookDTO} from '../../model/bookDTO';

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

  bookDTO: Observable<any>;

  constructor(private activateRoute: ActivatedRoute, private booksService: BooksService, private authService: AuthService, private meratedService: MeratedService) {
    this.id = activateRoute.snapshot.params.id;
  }


  ngOnInit(): void {
    this.reloadData();
  }

  ratedBook(){

  }


  reloadData() {
    this.bookDTO = this.meratedService.getInfoAboutRated(String(this.id));
    this.book = this.booksService.getBookInfo(String(this.id));
    this.isLoggedIn = this.authService.isLoggedIn();
    console.log(this.authService.getLoggedInUserName());
    console.log(this.bookDTO);
    this.bookDTO.subscribe(res => console.log(res));
  }

}
