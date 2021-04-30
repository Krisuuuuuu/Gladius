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
      mergeMap(() => this.userService.getUserProfile("test").pipe(
        map(userProfile => importedActions.UserActions.userProfileReceived({ userProfile }))
      ))
    );
  });

  updateUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.UserActions.updateUserProfile),
      mergeMap(({ userProfile }) => this.userService.putDataToEditUserProfile("test", userProfile).pipe(
        map(() => importedActions.UserActions.userProfileUpdatedSuccessfully())
      ))
    );
  });

  updateUserPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.UserActions.updateUserPassword),
      mergeMap(({ userPassword }) => this.userService.putDataToEditUserPassword("test", userPassword).pipe(
        map(() => importedActions.UserActions.userProfileUpdatedSuccessfully())
      ))
    )
  });
}
