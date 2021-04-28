import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGymSelectionState } from "../model/IGymSelection";

const selectGymSelectionState = createFeatureSelector<IGymSelectionState>(
  'gymSelection'
);

const selectCurrentGym = createSelector(
  selectGymSelectionState,
  (state: IGymSelectionState) => state.currentGym
);

const selectGyms = createSelector(
  selectGymSelectionState,
  (state: IGymSelectionState) => state.gyms
);

export const GymSelectionSelectors = {
  selectCurrentGym,
  selectGyms
};
