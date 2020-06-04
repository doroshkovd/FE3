import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Part } from "../../shared/models/part.model";
import { PartsService } from "../parts.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import * as shoppingListActions from '../store/shopping-list.actions';
import { ShoppingListState } from "../store/shopping-list.reducer";
import { AppState } from "../../store/app.reducer";

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
  constructor(
    private partsService: PartsService,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.editedElementSubscription = this.store.select('shoppingList')
      .subscribe((state: ShoppingListState) => {
        if (state.editedPart) {
          this.editedElement = state.editedPart;
          this.editedIndex = state.editedIndex;
          this.isEdit = true;
          this.form.setValue({name: this.editedElement.name, amount: this.editedElement.amount });
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
    this.store.dispatch(new shoppingListActions.DeletePart());
    this.onClear();
  }

  private _addEditPart(name: string, amount: number ) {
    const part: Part = {
      name,
      amount,
    };
    if (!this.isEdit) {
      this.store.dispatch(new shoppingListActions.AddPartStartAction([part]));
    } else {
      part.id = this.editedElement.id;
      this.store.dispatch(new shoppingListActions.UpdatePart(part));

    }
    this.isEdit = false;
  }
}
