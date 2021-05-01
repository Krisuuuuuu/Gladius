import { IUserProfile } from "src/app/model/user-profile/IUserProfile";

export interface IUserProfileState {
  isUserProfileReceiving: boolean;
  isUserProfileUpdating: boolean;
  userProfile: IUserProfile | null;
}

export const InitialUserProfileState: IUserProfileState = {
  isUserProfileReceiving: false,
  isUserProfileUpdating: false,
  userProfile: null
};
