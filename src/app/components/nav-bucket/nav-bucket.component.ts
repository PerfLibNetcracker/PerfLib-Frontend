import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bucket',
  templateUrl: './nav-bucket.component.html',
  styleUrls: ['./nav-bucket.component.css'],
})
export class NavBucketComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserLoggedIn;
  }

  checkBucket(): void {
    this.isLoggedIn = this.authService.isUserLoggedIn;
  }
}
