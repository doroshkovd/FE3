import { Action } from "@ngrx/store";
import { Part } from "../../shared/models/part.model";

export const ADD_PART = 'ADD_PART';
export const UPDATE_PART = 'UPDATE_PART';
export const SET_EDITED_PART = 'SET_EDITED_PART';
export const DELETE_PART = 'DELETE_PART';

export class AddPart implements Action {
  readonly type = ADD_PART;
  constructor(public payload: Part[]) {}
}

export class UpdatePart implements Action {
  readonly type = UPDATE_PART;
  constructor(public payload: Part) {}
}

export class SetEditedPart implements Action {
  readonly type = SET_EDITED_PART;
  constructor(public payload: number) {}
}

export class DeletePart implements Action {
  readonly type = DELETE_PART;
  constructor() {}
}

export type ShoppingListActions =
  AddPart |
  UpdatePart |
  SetEditedPart |
  DeletePart;
