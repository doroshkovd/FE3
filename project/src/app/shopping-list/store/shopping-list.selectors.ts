import { AppState } from "../../store/app.reducer";
import { createSelector } from "@ngrx/store";
import { ShoppingListState } from "./shopping-list.reducer";

export const selectShoppingList = (state: AppState) => state.shoppingList;

export const selectParts = createSelector(selectShoppingList,
  (state: ShoppingListState) => state.parts);

export const selectEditedIndex = createSelector(selectShoppingList,
  ((state: ShoppingListState) => state.editedIndex));

export const selectEditedPart = createSelector(selectShoppingList,
  ((state: ShoppingListState) => state.editedPart));
