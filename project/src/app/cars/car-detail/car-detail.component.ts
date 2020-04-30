import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Car } from "../../shared/models/car.model";
import { CarsService } from "../../shared/services/cars/cars.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { PartsService } from "../../shared/services/parts/parts.service";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {
  private carSubscription: Subscription;
  car: Car;

  constructor(private carsService: CarsService,
              private route: ActivatedRoute,
              private partsService: PartsService,
              private router: Router) { }

  ngOnInit(): void {
    this.carSubscription = this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.car = this.carsService.getCarById(+paramMap.get('id'));
      });
  }

  addParts() {
    this.partsService.addParts(this.car.parts);
    this.router.navigate(['shopping-list'])
    return false;
  }
}
