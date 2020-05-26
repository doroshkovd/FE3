import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarsComponent } from "./cars.component";
import { NoCarsComponent } from "./no-cars/no-cars.component";
import { CarListComponent } from "./car-list/car-list.component";
import { CarItemComponent } from "./car-list/car-item/car-item.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { AddEditCarComponent } from "./add-edit-car/add-edit-car.component";
import { CarsRoutingModule } from "./cars-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule,
    SharedModule
  ],
  declarations: [
    CarsComponent,
    NoCarsComponent,
    CarListComponent,
    CarItemComponent,
    CarDetailComponent,
    AddEditCarComponent,
  ]
})
export class CarsModule {

}
