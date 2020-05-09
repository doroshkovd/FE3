import { Injectable } from '@angular/core';
import { Car } from "../../models/car.model";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class CarsService {

  private _cars: Car[] = [];

  private _activeCar: BehaviorSubject<Car> = new BehaviorSubject<Car>(null);

  get cars() {
    return [...this._cars];
  }

  constructor(private http: HttpClient) { }

  addCar(car) {
    return this.http.post('https://fe3-course.firebaseio.com/cars.json', car);
  }

  updateCar(id: string, car) {
    return this.http.put(`https://fe3-course.firebaseio.com/cars/${id}.json`, car);
  }

  deleteCar(id) {
    return this.http.delete(`https://fe3-course.firebaseio.com/cars/${id}.json`)
      .pipe(
        map(
          (data) => {
          this._cars = this._cars.filter(car => car.id !== id);
        }),
      );
  }

  getCars(): Observable<Car[]> {
    return this.http.get('https://fe3-course.firebaseio.com/cars.json')
      .pipe(
        map((data) => {
          const cars: Car[] = [];
          for (let key in data) {
            cars.push({id: key, ...data[key]});
          }
          this._cars = cars;
          return cars;
        })
      );
  }

  getCarById(id: string): Car {
    console.log(this._cars);
    return this._cars.find((car: Car) => car.id === id);
  }

  getActiveCar(id) {
    return this._activeCar.asObservable();
  }

  setActiveCar(car: Car): void {
    this._activeCar.next(car);
  }
}
