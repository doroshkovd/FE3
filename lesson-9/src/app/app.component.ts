import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from "rxjs";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('form', {static: true}) ngForm: NgForm;

  secret = 'teacher';
  genders: any[] = [
    {value: 'male', label: 'Male'},
    {value: 'female', label: 'Female'},
  ];

  constructor() {
  }

  ngAfterViewInit(): void {
    // console.log(this.form);
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
  }

  suggestName() {
    const name = 'Awesome name';
    this.ngForm.form.patchValue({
      userData: {
        username: name,
      },
      gender: 'male',
    });
  }

  clearForm() {
    this.ngForm.resetForm({
      gender: '',
      question: 'pet',
      terms: true,
      userData: {
        email: '',
        username: '',
      }
    });
    // this.ngForm.setValue({
    //   gender: '',
    //   question: 'pet',
    //   terms: true,
    //   userData: {
    //     email: '',
    //     username: '',
    //   }
    // });
    return false;
  }
}
