import { IGym } from "src/app/model/gym-selection/IGym";

export interface IGymSelectionState {
  currentGym: IGym | null;
  gyms: Array<IGym>;
  areGymsAdding: boolean
}

export const InitialGymSelectionState: IGymSelectionState = {
  currentGym: null,
  gyms: [],
  areGymsAdding: false
};
