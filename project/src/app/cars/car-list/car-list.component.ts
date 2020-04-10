import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from "../../shared/models/car.model";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  @Output() changeCar: EventEmitter<Car> = new EventEmitter<Car>();

  cars: Car[] = [
    new Car('Ford', 'Some description',
      'https://avatars.mds.yandex.net/get-autoru-vos/1973880/c290547d992c4c148e894d2d4ec73fa4/1200x900n'),
  new Car('Ford', 'Some description',
      'https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349'),
  ];

  constructor() { }

  selectCar(index: number) {
    this.changeCar.emit(this.cars[index]);
  }

  ngOnInit(): void {
  }

}
