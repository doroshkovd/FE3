import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: 'app-change-4',
  template: `
    <div style="margin: 20px" *ngFor="let item of $items | async">{{item}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Change4Component {
  @Input() $items: Observable<any[]>;
}
