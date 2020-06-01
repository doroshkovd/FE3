import { Component, OnDestroy, OnInit } from '@angular/core';
import { Part } from "../shared/models/part.model";
import { PartsService } from "./parts.service";
import { Observable, Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { ShoppingListState } from "./store/shopping-list.reducer";
import * as shoppingListActions from './store/shopping-list.actions';
import { AppState } from "../store/app.reducer";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  parts$: Observable<ShoppingListState>;

  constructor(
    private partsService: PartsService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.parts$ = this.store.select('shoppingList');
  }

  onEditElement(index) {
    // this.partsService.onEditPart(index);
    this.store.dispatch(new shoppingListActions.SetEditedPart(index));
  }
}
