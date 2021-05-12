import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AppDataService } from "src/app/services/app-data.service";
import { mergeMap, map, catchError } from "rxjs/operators";
import * as importedActions from "../actions/gym-selection.actions";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs";

@Injectable()
export class GymSelectionEffects {

  constructor(
    private actions$:Actions,
    private appDataService: AppDataService,
    private toastr: ToastrService
    ) {}

  getAllGyms$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.GymSelectionActions.loadGyms),
      mergeMap(({ companyName }) => this.appDataService.getGyms(companyName).pipe(
        map(gyms => importedActions.GymSelectionActions.gymsReceived({ gyms })),
        catchError(() => {
          this.toastr.error("Loading of gyms failed.");
          return of(importedActions.GymSelectionActions.loadingGymsFailed());
        })
      ))
    );
  });
}
