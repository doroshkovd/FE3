import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as fromShoppingListActions from './shopping-list.actions';
import { catchError, map, switchMap } from "rxjs/operators";
import { PartsService } from "../parts.service";
import { Part } from "../../shared/models/part.model";
import { of } from "rxjs";

@Injectable()
export class ShoppingListEffects {

  @Effect()
  getParts$ = this.actions$.pipe(
    ofType(fromShoppingListActions.GET_PART_START),
    switchMap((action: fromShoppingListActions.GetPartStartAction) => {
      return this.partsService.getParts()
        .pipe(
          map((part: Part[]) => {
            return new fromShoppingListActions.GetPartSuccessAction(part);
          }),
          catchError((error) => of(new fromShoppingListActions.GetPartFailedAction(error)))
        )
    })
  );

  @Effect()
  addPart$ = this.actions$.pipe(
    ofType(fromShoppingListActions.ADD_PART_START),
    map((action: fromShoppingListActions.AddPartStartAction) => action.payload),
    switchMap((parts: Part[]) => {
      return this.partsService.addParts(parts).pipe(
        map((part: Part) => {
          return new fromShoppingListActions.AddPartSuccessAction([part]);
        }),
        catchError((error) => of(new fromShoppingListActions.AddPartFiledAction(error))),
      );
    })
  );

  constructor(private actions$: Actions, private partsService: PartsService){}
}
