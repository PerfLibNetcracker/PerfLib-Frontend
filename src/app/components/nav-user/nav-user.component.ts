import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {


  isLoggedIn: boolean;
  username: string;
  password: string;
  errorMessage = 'Неправильный логин или пароль';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    if(this.authService.isUserLoggedIn()) {
      this.isLoggedIn = true;
    }
  }

  // tslint:disable-next-line:typedef
  handleLogin() {
    this.authService.authService(this.username, this.password).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.isLoggedIn = true;
      this.router.navigate(['/books']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }

  // tslint:disable-next-line:typedef
  handleLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
