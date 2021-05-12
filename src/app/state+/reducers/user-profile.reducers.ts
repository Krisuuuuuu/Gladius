import { Action, createReducer, on } from "@ngrx/store";
import { UserActions } from "../actions/user.actions";
import { InitialUserProfileState, IUserProfileState } from "../model/IUserProfileState";

const reducer = createReducer(
  InitialUserProfileState,
  on(UserActions.loadUserProfile, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileReceiving: true
    };
  }),
  on(UserActions.userProfileReceived, (state: IUserProfileState, { userProfile }) => {
    return {
      ...state,
      isUserProfileReceiving: false,
      userProfile: userProfile
    };
  }),
  on(UserActions.loadingUserProfileFailed, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileReceiving: false
    };
  }),
  on(UserActions.updateUserProfile, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileUpdating: true
    };
  }),
  on(UserActions.userProfileUpdatedSuccessfully, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileUpdating: false
    };
  }),
  on(UserActions.updatingUserProfileFailed, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileUpdating: false
    };
  }),
  on(UserActions.updateUserPassword, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileUpdating: true
    };
  }),
  on(UserActions.userPasswordUpdatedSuccessfully, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileUpdating: false
    };
  }),
  on(UserActions.updatingPasswordFailed, (state: IUserProfileState) => {
    return {
      ...state,
      isUserProfileUpdating: false
    };
  }),
);

export function userProfileReducer(
  state: IUserProfileState | undefined,
  action: Action
): IUserProfileState {
  return reducer(state, action);
}
