import { Part } from "../../shared/models/part.model";
import { ADD_PART, DELETE_PART, SET_EDITED_PART, ShoppingListActions, UPDATE_PART } from "./shopping-list.actions";

export interface ShoppingListState {
  parts: Part[];
  editedPart: Part;
  editedIndex: number;
}

const initialShoppingListState: ShoppingListState = {
  parts: [
    {id: '1', amount: 12, name: 'Part 1'},
    {id: '2', amount: 24, name: 'Part 2'},
  ],
  editedPart: null,
  editedIndex: -1,
};

export function shoppingListReducer(state: ShoppingListState = initialShoppingListState, action: ShoppingListActions) {
  switch(action.type) {
    case ADD_PART:
      return {
        ...state,
        parts: [...state.parts, ...action.payload],
      };

    case UPDATE_PART:
      const newPart = action.payload;
      const newParts = [...state.parts];
      newParts[state.editedIndex] = {
        ...newParts[state.editedIndex],
        ...newPart,
      };

      return {
        ...state,
        parts: newParts,
        editedIndex: -1,
        editedPart: null,
      };

      case SET_EDITED_PART:
        return {
          ...state,
          editedIndex: action.payload,
          editedPart: state.parts[action.payload],
        };

    case DELETE_PART:
          const filterParts = state.parts.filter((part: Part, index: number) => index !== state.editedIndex);
          return {
            ...state,
            parts: filterParts,
            editedPart: null,
            editedIndex: -1,
          };
    default:
      return state;
  }
}
