import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Part } from "../../shared/models/part.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() addPart: EventEmitter<Part> = new EventEmitter<Part>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddPart() {
    const part: Part = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    };

    this.addPart.emit(part);
    return false;
  }

}
