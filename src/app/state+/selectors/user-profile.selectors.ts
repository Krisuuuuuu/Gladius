import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserProfileState } from "../model/IUserProfileState";

const selectUserProfileState = createFeatureSelector<IUserProfileState>(
  'userProfile'
);

const selectUserProfile = createSelector(
  selectUserProfileState,
  (state: IUserProfileState) => state.userProfile
);

export const UserProfileSelectors = {
  selectUserProfile
};
