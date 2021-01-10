import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SubscriptionService} from "../../services/subscription.service";
import {Observable} from "rxjs";
import {Book} from "../../model/Book";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  userDTO: Observable<any>;
  infoAboutSubscription: Observable<any>;

  constructor(private subscriptionService: SubscriptionService, private router: Router) {

  }


  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.userDTO = this.subscriptionService.checkSubscription();
    this.infoAboutSubscription = this.subscriptionService.getInfoAboutSubscription();
  }

  submitSevenDays(): void {
    this.subscriptionService.addSubscription(String(7)).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    this.router.navigate(['/books']);
  }

  submitThirty(): void {
    this.subscriptionService.addSubscription(String(30)).subscribe(data => {
        console.log(data);
      },
      error => console.log(error));
    this.router.navigate(['/books']);
  }

}
