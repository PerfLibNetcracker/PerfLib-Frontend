import { Component, OnInit } from '@angular/core';
import {AuthService, User} from '../../services/auth.service';
@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService) {console.log('Loggin:', authService.isLoggedIn); }
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      next => {
        console.log(next);
        this.isLoggedIn = next;
      }
    );
  }
  logout(): void {
    this.authService.logout();
  }
}
