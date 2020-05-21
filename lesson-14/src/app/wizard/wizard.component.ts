import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from "@angular/core";
import { AnchorDirective } from "./anchor.directive";
import { StepBase } from "./step-base";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  isShow = false;
  step = 1;
  componentSubscription: Subscription;

  @Input() componentList;
  @ViewChild(AnchorDirective, {static: true}) stepHost: AnchorDirective;

  get title() {
    return `Wizard - Step: ${this.step}`;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.componentList[this.step]);
    const viewContainerRef = this.stepHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<StepBase>componentRef.instance).data = `Data for step ${this.step}`;
    this.componentSubscription = (<StepBase>componentRef.instance).next
      .subscribe(this.onStepChange.bind(this));
  }

  onStepChange(data) {
    this.componentSubscription.unsubscribe();
    if (data.nextStep === 0) {
      this.isShow = false;
      this.step = 1;
      this.stepHost.viewContainerRef.clear();
      this.loadComponent();
      return false;
    }
    this.step = data.nextStep;
    this.loadComponent();
  }
}
