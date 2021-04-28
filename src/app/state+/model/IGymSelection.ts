import { IGym } from "src/app/model/gym-selection/IGym";

export interface IGymSelectionState {
  selectedGym: IGym;
  gyms: Array<IGym>;
}
