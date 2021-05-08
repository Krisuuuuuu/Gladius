import { createAction, props } from "@ngrx/store";
import { ISignInData } from "src/app/model/main-page/ISignInData";
import { IChangePassword } from "src/app/model/user-profile/IChangePassword";
import { IUserProfile } from "src/app/model/user-profile/IUserProfile";

const signIn = createAction(
  '[Main Page] Sign In',
  props<{ signInData: ISignInData }>()
);

const signOut = createAction(
  '[User Panel] Sign Out'
);

const loadUserProfile = createAction(
  '[User Profile] Load user profile'
);

const userProfileReceived = createAction(
  '[User Profile] User profile received',
  props<{ userProfile: IUserProfile }>()
);

const updateUserProfile = createAction(
  '[User Profile] User profile changed',
  props<{ userProfile: IUserProfile }>()
);

const userProfileUpdatedSuccessfully = createAction(
  '[User Profile] User profile updated successfully'
);

const updateUserPassword = createAction(
  '[User Profile] User password updated',
  props<{ userPassword: IChangePassword }>()
);

const userPasswordUpdatedSuccessfully = createAction(
  '[User Profile] User password updated successfully',
);

export const UserActions = {
  signIn,
  signOut,
  loadUserProfile,
  userProfileReceived,
  updateUserProfile,
  userProfileUpdatedSuccessfully,
  updateUserPassword,
  userPasswordUpdatedSuccessfully
};
