import { Component, OnInit } from '@angular/core';
import { CarsService } from "../../shared/services/cars/cars.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Car } from "../../shared/models/car.model";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.scss']
})
export class AddEditCarComponent implements OnInit {

  title: string;
  editCar: Car;
  editCarId: number;
  isEdit = false;
  carForm: FormGroup;

  constructor(private carsService: CarsService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  get parts() {
    return this.carForm.get('parts') as FormArray;
  }

  get imagePath() {
    return this.carForm.get('imagePath');
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        if (paramMap.get('id')) {
          this.title = 'Edit Car';
          this.isEdit = true;
          this.editCarId = +paramMap.get('id');
        } else {
          this.title = 'Add Car';
        }
        this._initForm();
      });
  }

  onSubmit() {
    console.log(this.carForm);
    this.redirect();
  }

  redirect() {
    this.router.navigate(['/cars']);
  }

  onAddPart() {
    this.parts.push(new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }));
  }

  onDeletePart(index) {
    this.parts.removeAt(index);
  }

  private _initForm() {
    let carName = '';
    let carImagePath = '';
    let carDescription = '';
    let carParts = new FormArray([]);

    if (this.isEdit) {
      this.editCar = this.carsService.getCarById(this.editCarId);
      carName = this.editCar.name;
      carImagePath = this.editCar.imagePath;
      carDescription = this.editCar.description;
      if (this.editCar.parts) {
        for (let part of this.editCar.parts) {
          carParts.push(new FormGroup({
            name: new FormControl(part.name, Validators.required),
            amount: new FormControl(+part.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        }
      }
    }

    this.carForm = new FormGroup({
      name: new FormControl(carName, Validators.required),
      imagePath: new FormControl(carImagePath, Validators.required),
      description: new FormControl(carDescription, Validators.required),
      parts: carParts,
    });
  }
}
