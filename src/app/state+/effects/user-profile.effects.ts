import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { mergeMap, map } from "rxjs/operators";
import * as importedActions from "../actions/user.actions";


@Injectable()
export class UserProfileEffects {

  constructor(private actions$:Actions,
    private userService: UserService) {}

  getUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.UserActions.loadUserProfile),
      mergeMap(() => this.userService.getUserProfile().pipe(
        map(userProfile => importedActions.UserActions.userProfileReceived({ userProfile }))
      ))
    );
  });

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importedActions.UserActions.updateUserProfile),
      mergeMap(({ userProfile }) => this.userService.putDataToEditUserProfile(userProfile).pipe(
        map(() => importedActions.UserActions.userProfileUpdatedSuccessfully())
      ))
    ),
    { dispatch: false }
  );

  updateUserPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importedActions.UserActions.updateUserPassword),
      mergeMap(({ userPassword }) => this.userService.putDataToEditUserPassword(userPassword).pipe(
        map(() => importedActions.UserActions.userProfileUpdatedSuccessfully())
      ))
    ),
    { dispatch: false }
  );
}
