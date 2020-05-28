import { Component, DoCheck, NgZone } from "@angular/core";

@Component({
  selector: 'app-zone',
  template: `
    <h3>Progress: {{progress}}</h3>
    <button (click)="processOutsideAngular()">
        Run progress
    </button>
  `
})
export class ZoneComponent implements DoCheck {
  progress = 0;

  constructor(private ngZone: NgZone) {}

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  processOutsideAngular() {
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this.increaseProgress(() => {
        this.ngZone.run(() => {
          console.log('done');
        })
      });
    });
  }

  onClick() {
    this.progress = 0;
    this.increaseProgress(() => console.log('Done'));
  }

  increaseProgress(done: () => void) {
    this.progress += 1;
    console.log(`Progress is: ${this.progress}%`);

    if(this.progress < 100) {
      setTimeout(() => {
        this.increaseProgress(done);
      }, 10)
    } else {
      done();
    }
  }

}

