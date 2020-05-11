import { Injectable } from '@angular/core';
import { Car } from "../../models/car.model";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";

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
    return this.http.post(`${environment.api}/cars.json`, car)
      .pipe(
        tap((data: {name: string}) => {
          this._cars.push({id: data.name, ...car})
        })
      );
  }

  updateCar(id: string, car) {
    return this.http.put(`${environment.api}/cars/${id}.json`, car)
      .pipe(
        tap(() => {
          let index: number;
          this._cars.forEach((item) => {
            if (item.id === id) {
              item.name = car.name;
              item.description = car.description;
              item.imagePath = car.imagePath;
              item.parts = car.parts;
            }
          });
        })
      );
  }

  deleteCar(id) {
    return this.http.delete(`${environment.api}/cars/${id}.json`)
      .pipe(
        map(
          (data) => {
          let index: number;
          this._cars.forEach((car, carIndex) => {
            if (car.id === id) {
              index = carIndex;
            }
          });
          this._cars.splice(index, 1);
        }),
      );
  }

  getCars(): Observable<Car[]> {
    return this.http.get(`${environment.api}/cars.json`)
      .pipe(
        map((data) => {
          const cars: Car[] = [];
          for (let key in data) {
            cars.push({id: key, ...data[key]});
          }
          this._cars = cars;
          return this._cars;
        })
      );
  }

  getCarById(id: string): Car {
    return this._cars.find((car: Car) => car.id === id);
  }

  getActiveCar(id) {
    return this._activeCar.asObservable();
  }

  setActiveCar(car: Car): void {
    this._activeCar.next(car);
  }
}
