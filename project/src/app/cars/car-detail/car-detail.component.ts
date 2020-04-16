import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Car } from "../../shared/models/car.model";
import { CarsService } from "../../shared/services/cars/cars.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit, OnDestroy {
  private carSubscription: Subscription;
  car: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carSubscription = this.carsService.getActiveCar()
      .subscribe((car) => {
        this.car = car;
      });
  }

  ngOnDestroy(): void {
    this.carSubscription.unsubscribe();
  }
}
