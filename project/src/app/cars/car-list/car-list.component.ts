import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from "../../shared/models/car.model";
import { CarsService } from "../../shared/services/cars/cars.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor(private carsService: CarsService, private router: Router) { }

  ngOnInit(): void {
    this.cars = this.carsService.cars;
  }

  onNewCarClick(): void {
    this.router.navigate(['/cars', 'add']);
  }
}
