import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: 'app-change-1',
  template: `
    <h1>Hello, {{config.name}}</h1>
    {{runChangeDetector}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Change1Component {
  @Input() config: any;

  get runChangeDetector() {
    console.log('Checking view');
    return true;
  }
}
