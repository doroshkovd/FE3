import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Output() menuClick: EventEmitter<string> = new EventEmitter<string>();
  links: string[] = ['cars', 'shopping-list'];
  collapsed = false;
  constructor() {
  }

  onMenuClick(item: number) {
    this.menuClick.emit(this.links[item]);
  }
}
