import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isMobileWidth = false;
  ngOnInit(): void {
    this.checkAdaptiveWidth();
    window.addEventListener('resize', this.checkAdaptiveWidth);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkAdaptiveWidth);
  }
  checkAdaptiveWidth(): void {
    this.isMobileWidth = window.innerWidth <= 900;
  }
}
