import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Car } from "../../models/car.model";
import { Observable } from "rxjs";
import { CarsService } from "./cars.service";

@Injectable({
  providedIn: 'root',
})
export class CarsResolver implements Resolve<Car[]> {
  constructor(private carsService: CarsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car[]> {
    return this.carsService.getCars();
  }
}
