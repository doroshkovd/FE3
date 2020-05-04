import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Part } from "../../shared/models/part.model";
import { PartsService } from "../../shared/services/parts/parts.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: true}) form: NgForm;
  isEdit = false;
  editedElement: Part;
  editedIndex: number;
  editedElementSubscription: Subscription;
  constructor(private partsService: PartsService) { }

  ngOnInit(): void {
    this.editedElementSubscription = this.partsService.editedElement
      .subscribe((element: {part: Part, index: number}) => {
        if (element) {
          this.editedElement = element.part;
          this.editedIndex = element.index;
          this.isEdit = true;
          this.form.setValue(element.part);
        }
      })
  }

  onSubmit(form: NgForm) {
    this._addEditPart(form.value.name, form.value.amount);
    form.resetForm();
  }

  ngOnDestroy(): void {
    this.editedElementSubscription.unsubscribe();
  }

  onClear() {
    this.isEdit = false;
    this.form.resetForm();
  }

  onDelete() {
    this.partsService.deletePart(this.editedIndex);
    this.onClear();
  }

  private _addEditPart(name: string, amount: number ) {
    const part: Part = {
      name,
      amount,
    };
    if (!this.isEdit) {
      this.partsService.addParts([part]);
    } else {
      this.partsService.editPart(part, this.editedIndex);
    }
    this.isEdit = false;
  }
}
