import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from "./cars/cars.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { CarDetailComponent } from "./cars/car-detail/car-detail.component";
import { NoCarsComponent } from "./cars/no-cars/no-cars.component";
import { AddEditCarComponent } from "./cars/add-edit-car/add-edit-car.component";
import { CarsResolver } from "./shared/services/cars/cars.resolver";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./shared/services/auth/auth.guard";
import { NoAuthGuard } from "./shared/services/auth/no-auth.guard";


const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {
    path: 'cars',
    component: CarsComponent,
    canActivate: [ AuthGuard ],
    resolve: { cars: CarsResolver },
    children: [
      { path: '', component: NoCarsComponent },
      { path: 'add', component: AddEditCarComponent },
      { path: ':id', component: CarDetailComponent },
      { path: 'edit/:id', component: AddEditCarComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [ AuthGuard ] },
  { path: 'auth', component: AuthComponent, canActivate: [ NoAuthGuard ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
