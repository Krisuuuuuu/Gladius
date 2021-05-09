import { Action, createReducer, on } from "@ngrx/store";
import { UserActions } from "../actions/user.actions";
import { IMainPageState, InitialMainPageState } from "../model/IMainPageState";

const reducer = createReducer(
  InitialMainPageState,
  on(UserActions.signInButtonClicked, (state: IMainPageState) => {
    return {
      ...state,
      isSigningIn: true
    };
  }),
  on(UserActions.signInSuccess, (state: IMainPageState) => {
    return {
      ...state,
      isSigningIn: false
    };
  })
);

export function mainPageReducer(
  state: IMainPageState | undefined,
  action: Action
): IMainPageState {
  return reducer(state, action);
}
