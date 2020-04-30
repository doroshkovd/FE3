import { Injectable } from '@angular/core';
import { Car } from "../../models/car.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  private _cars: Car[] = [
    new Car(
      1,
      'Ford',
      'Some description',
      'https://avatars.mds.yandex.net/get-autoru-vos/1973880/c290547d992c4c148e894d2d4ec73fa4/1200x900n',
      [{name: 'new part 1', amount: 2}],
    ),
    new Car(2, 'Red Car', 'Some description',
      'https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349',
  []),
  ];

  private _activeCar: BehaviorSubject<Car> = new BehaviorSubject<Car>(null);

  get cars() {
    return [...this._cars];
  }

  constructor() { }

  getCarById(id: number): Car {
    return this._cars.find((car: Car) => car.id === id);
  }

  getActiveCar(id) {
    return this._activeCar.asObservable();
  }

  setActiveCar(car: Car): void {
    this._activeCar.next(car);
  }
}
