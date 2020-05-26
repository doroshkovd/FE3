import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from "./cars.component";
import { AuthGuard } from "../auth/auth.guard";
import { CarsResolver } from "./cars.resolver";
import { NoCarsComponent } from "./no-cars/no-cars.component";
import { AddEditCarComponent } from "./add-edit-car/add-edit-car.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";


const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    canActivate: [ AuthGuard ],
    data: {animation: 'Cars'},
    resolve: { cars: CarsResolver },
    children: [
      { path: '', component: NoCarsComponent },
      { path: 'add', component: AddEditCarComponent },
      { path: ':id', component: CarDetailComponent },
      { path: 'edit/:id', component: AddEditCarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
