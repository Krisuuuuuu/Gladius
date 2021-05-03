import { IUserProfile } from "src/app/model/user-profile/IUserProfile";

export interface IUserProfileState {
  isUserProfileReceiving: boolean;
  isUserProfileUpdating: boolean;
  userProfile: IUserProfile;
}

export const InitialUserProfileState: IUserProfileState = {
  isUserProfileReceiving: false,
  isUserProfileUpdating: false,
  userProfile: {} as IUserProfile
};
