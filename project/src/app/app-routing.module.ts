import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from "./cars/cars.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { CarDetailComponent } from "./cars/car-detail/car-detail.component";
import { NoCarsComponent } from "./cars/no-cars/no-cars.component";
import { AddEditCarComponent } from "./cars/add-edit-car/add-edit-car.component";


const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {
    path: 'cars',
    component: CarsComponent,
    children: [
      { path: '', component: NoCarsComponent },
      { path: 'add', component: AddEditCarComponent },
      { path: ':id', component: CarDetailComponent },
      { path: 'edit/:id', component: AddEditCarComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
