import { createAction, props } from "@ngrx/store";
import { IChangePassword } from "src/app/model/user-profile/IChangePassword";
import { IUserProfile } from "src/app/model/user-profile/IUserProfile";

const signIn = createAction(
  '[Main Page] Sign In',
  props<{ email: string, password: string }>()
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

const userProfileChanged = createAction(
  '[User Profile] User profile changed',
  props<{ userProfile: IUserProfile }>()
);

const userPasswordChanged = createAction(
  '[User Profile] User password changed',
  props<{ userPassword: IChangePassword }>()
);

export const UserActions = {
  signIn,
  signOut,
  loadUserProfile,
  userProfileReceived,
  userProfileChanged,
  userPasswordChanged
}
