import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.reducer";
import { Observable } from "rxjs";
import { Part } from "../shared/models/part.model";
import { selectParts } from './store/shopping-list.selectors';
import * as fromShoppingListActions from "./store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list-container',
  template: `<app-shopping-list
              [parts]="parts$ | async" 
              (editElement)="onSetEditedPart($event)"
  ></app-shopping-list>`
})
export class ShoppingListContainer implements OnInit {
  parts$: Observable<Part[]>;

  constructor(private store: Store<AppState>) {
    this.parts$ = this.store.select(selectParts);
  }

  ngOnInit(): void {
    this.store.dispatch(new fromShoppingListActions.GetPartStartAction());
  }

  onSetEditedPart(index: number) {
    this.store.dispatch(new fromShoppingListActions.SetEditedPart(index));
  }
}
