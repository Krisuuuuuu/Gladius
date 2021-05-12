import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, tap, catchError } from "rxjs/operators";
import * as importedActions from "../actions/user.actions";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs";

@Injectable()
export class MainPageEffects {

  constructor(private actions$:Actions,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {}

    signIn$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(importedActions.UserActions.signInButtonClicked),
        mergeMap(({ signInData}) => this.userService.postDataToSignIn(signInData).pipe(
          tap(() => {
            this.router.navigateByUrl('panel');
          }),
          map((token) => importedActions.UserActions.signInSuccess({ token: token})),
          catchError(() => {
            this.toastr.error("Invalid email or password");
            return of(importedActions.UserActions.signInFailed());
          })
        ))
      );
    });

    setToken$ = createEffect(
      () => () =>
      this.actions$.pipe(
        ofType(importedActions.UserActions.signInSuccess),
        tap(({ token }) => {
          localStorage.setItem('token', token.token);
        })
      ),
      { dispatch: false }
    );

    signOut$ = createEffect(
      () => () =>
      this.actions$.pipe(
        ofType(importedActions.UserActions.signOut),
        tap(() => {
          localStorage.clear();
          this.toastr.success("Signed out properly");
        })
      ),
      { dispatch: false }
    );
}
