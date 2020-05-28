import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatChip } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

import { EmployeeListComponent } from './employee-list.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCommonModule } from "@angular/material/core";
import { CalculatePipe } from "../calculate.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCommonModule,
    MatChipsModule
  ],
  declarations: [
    EmployeeListComponent,
    CalculatePipe
  ],
  exports: [
    EmployeeListComponent,
    MatInputModule,
    MatCommonModule,
    MatChipsModule
  ]
})
export class EmployeeListModule {}
