import { Component, Input, OnInit } from '@angular/core';
import { Car } from "../../shared/models/car.model";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  constructor() { }
  @Input() car: Car;

  ngOnInit(): void {
  }

}
