import { Component, Input, OnInit } from '@angular/core';
import { Car } from "../../../shared/models/car.model";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
