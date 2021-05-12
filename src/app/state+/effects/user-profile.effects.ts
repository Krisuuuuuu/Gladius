import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { mergeMap, map, catchError, tap } from "rxjs/operators";
import * as importedActions from "../actions/user.actions";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs";


@Injectable()
export class UserProfileEffects {

  constructor(
    private actions$:Actions,
    private userService: UserService,
    private toastr: ToastrService
    ) {}

  getUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(importedActions.UserActions.loadUserProfile),
      mergeMap(() => this.userService.getUserProfile().pipe(
        map(userProfile => importedActions.UserActions.userProfileReceived({ userProfile })),
        catchError(() => {
          this.toastr.error("Loading of user profile failed.");
          return of(importedActions.UserActions.signInFailed());
        })
      ))
    );
  });

  updateUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importedActions.UserActions.updateUserProfile),
      mergeMap(({ userProfile }) => this.userService.putDataToEditUserProfile(userProfile).pipe(
        tap(() => this.toastr.success("User profile has been updated successfully")),
        map(() => importedActions.UserActions.userProfileUpdatedSuccessfully()),
        catchError(() => {
          this.toastr.error("Updating of user profile failed.");
          return of(importedActions.UserActions.signInFailed());
        })
      ))
    ),
    { dispatch: false }
  );

  updateUserPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(importedActions.UserActions.updateUserPassword),
      mergeMap(({ userPassword }) => this.userService.putDataToEditUserPassword(userPassword).pipe(
        tap(() => this.toastr.success("Password has been updated successfully")),
        map(() => importedActions.UserActions.userProfileUpdatedSuccessfully()),
        catchError(() => {
          this.toastr.error("Updating of user password failed.");
          return of(importedActions.UserActions.signInFailed());
        })
      ))
    ),
    { dispatch: false }
  );
}
