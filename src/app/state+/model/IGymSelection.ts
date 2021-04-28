import { IGym } from "src/app/model/gym-selection/IGym";

export interface IGymSelectionState {
  currentGym: IGym;
  gyms: Array<IGym>;
}
