import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-change-2',
  template: `
    <button (click)="add()">Add</button>
    {{changes}}
    {{count}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Change2Component implements OnInit {

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
      console.log('timeout done');
    }, 1000);

    Promise.resolve().then(() => this.count = 222);
  }
}
