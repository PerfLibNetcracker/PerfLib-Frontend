import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriptionService } from '../../services/subscription.service';
import { Observable } from 'rxjs';
import { Book } from '../../model/Book';
import { SubscriptionInfoDTO } from 'src/app/model/SubscriptionInfoDTO';
import { UserInfoDTO } from 'src/app/model/UserInfoDTO';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent implements OnInit {
  userDTO: Observable<UserInfoDTO>;
  infoAboutSubscription: Observable<SubscriptionInfoDTO>;

  constructor(
    private subscriptionService: SubscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.userDTO = this.subscriptionService.getUserInfo();
    this.infoAboutSubscription = this.subscriptionService.getInfoAboutSubscription();
  }

  submitSevenDays(): void {
    this.subscriptionService.addSubscription(String(7)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    this.router.navigate(['/books']);
  }

  submitThirty(): void {
    this.subscriptionService.addSubscription(String(30)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    this.router.navigate(['/books']);
  }
}
