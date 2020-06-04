import { Action } from "@ngrx/store";
import { Part } from "../../shared/models/part.model";

export const GET_PART_START = '[Shopping List] GET_PART_START';
export const GET_PART_SUCCESS = '[Shopping List] GET_PART_SUCCESS';
export const GET_PART_FAILED = '[Shopping List] GET_PART_FILED';

export const ADD_PART_START = '[Shopping List] ADD_PART_START';
export const ADD_PART_SUCCESS = '[Shopping List] ADD_PART_SUCCESS';
export const ADD_PART_FAILED = '[Shopping List] ADD_PART_FILED';
export const UPDATE_PART = 'UPDATE_PART';
export const SET_EDITED_PART = 'SET_EDITED_PART';
export const DELETE_PART = 'DELETE_PART';

export class GetPartStartAction {
  readonly type = GET_PART_START;
  constructor() {}
}

export class GetPartSuccessAction {
  readonly type = GET_PART_SUCCESS;
  constructor(public payload: Part[]) {}
}

export class GetPartFailedAction {
  readonly type = GET_PART_FAILED;
  constructor(public payload: Part[]) {}
}

export class AddPartSuccessAction implements Action {
  readonly type = ADD_PART_SUCCESS;
  constructor(public payload: Part[]) {}
}

export class AddPartStartAction implements Action {
  readonly type = ADD_PART_START;
  constructor(public payload: Part[]) {}
}

export class AddPartFiledAction implements Action {
  readonly type = ADD_PART_FAILED;
  constructor(public payload: any) {}
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
  AddPartStartAction |
  UpdatePart |
  SetEditedPart |
  DeletePart |
  GetPartSuccessAction |
  GetPartStartAction |
  GetPartFailedAction |
  AddPartSuccessAction |
  AddPartFiledAction;
