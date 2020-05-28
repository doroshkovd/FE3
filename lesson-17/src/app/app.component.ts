import { Component } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config = {
    name: 'Dima'
  };

  items: BehaviorSubject<any[]> = new BehaviorSubject([1, 2, 3]);
  itemsObs = this.items.asObservable();

  constructor() {
  }

  onClick() {
    this.config = {
      name: 'Dina'
    };
  }

  sendNewItems() {
    this.items.next([10, 20, 30]);
  }
}
