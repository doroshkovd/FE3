import { Component, OnInit } from '@angular/core';
import { Car } from "../car.model";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  constructor() { }
  car: Car = new Car('Ford', 'Some description',
    'https://avatars.mds.yandex.net/get-autoru-vos/1973880/c290547d992c4c148e894d2d4ec73fa4/1200x900n');

  ngOnInit(): void {
  }

}
