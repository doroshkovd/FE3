import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-change-3',
  template: `
    <button (click)="add()">Add</button>
    {{changes}}
    {{count}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Change3Component implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {

  }

  count = 0;

  get changes() {
    console.log('Changes done');
    return true;
  }

  add() {
    this.count += 1;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.count = 10;
       this.cdr.detectChanges();
       // this.cdr.markForCheck();
      console.log('timeout done');
    }, 1000);
  }
}
