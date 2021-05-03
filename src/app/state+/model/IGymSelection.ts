import { IGym } from "src/app/model/gym-selection/IGym";

export interface IGymSelectionState {
  areGymsReceiving: boolean;
  currentGym: IGym;
  gyms: Array<IGym>;
}

export const InitialGymSelectionState: IGymSelectionState = {
  areGymsReceiving: false,
  currentGym: {} as IGym,
  gyms: []
};
