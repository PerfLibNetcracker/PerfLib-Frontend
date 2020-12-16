import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  hideSearchForm(): void {
    this.counter++;
    if (this.counter % 2 === 0) {setTimeout(() => {
      document.getElementById('searchForm').style.opacity = '1';
      document.getElementById('bucketButton').style.opacity = '1';
      document.getElementById('userAuthDropdownMenu').style.opacity = '1';
      }, 300);
    }
      else {
        document.getElementById('searchForm').style.opacity = '0';
        document.getElementById('bucketButton').style.opacity = '0';
        document.getElementById('userAuthDropdownMenu').style.opacity = '0';
        document.getElementById('navbarItems').style.background = 'white';
        document.getElementById('navbarItems').style.width = '150px';
        document.getElementById('togglerButton').style.background = 'white';
      }
  }
}
