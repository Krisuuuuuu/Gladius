import { IUserProfile } from "src/app/model/user-profile/IUserProfile";

export interface IUserProfileState {
  isUserProfileAdding: boolean
  userProfile: IUserProfile | null;
}

export const InitialUserProfileState: IUserProfileState = {
  isUserProfileAdding: false
  userProfile: null,
};
