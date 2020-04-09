import { Component, OnInit } from '@angular/core';
import { Car } from "../car.model";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [
    new Car('Ford', 'Some description',
      'https://avatars.mds.yandex.net/get-autoru-vos/1973880/c290547d992c4c148e894d2d4ec73fa4/1200x900n'),
  new Car('Ford', 'Some description',
      'https://avatars.mds.yandex.net/get-autoru-vos/1973880/c290547d992c4c148e894d2d4ec73fa4/1200x900n'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
