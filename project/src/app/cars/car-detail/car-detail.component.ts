import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Car } from "../../shared/models/car.model";
import { CarsService } from "../../shared/services/cars/cars.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  private carSubscription: Subscription;
  car: Car;

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carSubscription = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.car = this.carsService.getCarById(+paramMap.get('id'));
      });
  }
}
