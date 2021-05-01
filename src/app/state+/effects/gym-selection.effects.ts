import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppDataService } from "src/app/services/app-data.service";
import { mergeMap, map } from "rxjs/operators";
import * as importedActions from "../actions/gym-selection.actions";

@Injectable()
export class GymSelectionEffects {

  constructor(private actions$:Actions,
    private appDataService: AppDataService) {}

  getAllGyms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.GymSelectionActions.loadGyms),
      mergeMap(({ email }) => this.appDataService.getGyms(email).pipe(
        map(gyms => importedActions.GymSelectionActions.gymsReceived({ gyms }))
      ))
    );
  });
}