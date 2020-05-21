import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { Step1Component } from "./wizard/step-1/step-1.component";
import { Step2Component } from "./wizard/step-2/step-2.component";
import { Step3Component } from "./wizard/step-3/step-3.component";
import { WizardComponent } from "./wizard/wizard.component";
import { AnchorDirective } from "./wizard/anchor.directive";
import { TestAnimationComponent } from "./test-animation/test-animation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    WizardComponent,
    AnchorDirective,
    TestAnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
