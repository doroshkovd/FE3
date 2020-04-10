import { Component, OnInit } from '@angular/core';
import { Car } from "../shared/models/car.model";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  activeCar: Car;
  constructor() { }

  ngOnInit(): void {
  }

}
