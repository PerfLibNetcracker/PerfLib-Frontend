import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save(): void {
    this.authService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.user = new User();
    },
      error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }
}
