import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from "rxjs";
import { NgForm } from "@angular/forms";
import { Step1Component } from "./wizard/step-1/step-1.component";
import { Step2Component } from "./wizard/step-2/step-2.component";
import { Step3Component } from "./wizard/step-3/step-3.component";

const COMPONENT_MAP = {
  1: Step1Component,
  2: Step2Component,
  3: Step3Component,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  componentList = COMPONENT_MAP;

  constructor() {
  }

}
