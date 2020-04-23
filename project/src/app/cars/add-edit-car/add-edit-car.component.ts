import { Component, OnInit } from '@angular/core';
import { CarsService } from "../../shared/services/cars/cars.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.scss']
})
export class AddEditCarComponent implements OnInit {

  title: string;

  constructor(private carsService: CarsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        if (paramMap.get('id')) {
          this.title = 'Edit Car';
        } else {
          this.title = 'Add Car';
        }
      });
  }

}
