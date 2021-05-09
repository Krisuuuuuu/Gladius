import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainPageState } from "../model/IMainPageState";

const selectMainPageState = createFeatureSelector<IMainPageState>(
  'mainPage'
);

const selectIsSigningIn = createSelector(
  selectMainPageState,
  (state: IMainPageState) => state.isSigningIn
);

export const mainPageSelectors = {
  selectIsSigningIn
};
