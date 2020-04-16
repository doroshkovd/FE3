import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from "../../shared/models/car.model";
import { CarsService } from "../../shared/services/cars/cars.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsService.cars;
    console.log(this.cars);
  }

  selectCar(index: number) {
    this.carsService.setActiveCar(this.cars[index]);
  }
}
