import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Part } from "../../shared/models/part.model";
import { PartsService } from "../../shared/services/parts/parts.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private partsService: PartsService) { }

  ngOnInit(): void {
  }

  onAddPart() {
    const part: Part = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
    };
    this.partsService.addParts([part]);
    return false;
  }

}
