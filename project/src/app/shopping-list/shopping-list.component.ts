import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Part } from "../shared/models/part.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingListComponent {

  @Input() parts: Part[];
  @Output() editElement: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  onEditElement(index) {
    this.editElement.emit(index);
  }
}
