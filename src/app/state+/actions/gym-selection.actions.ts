import { createAction, props } from "@ngrx/store";
import { IGym } from "src/app/model/gym-selection/IGym";

const gymsReceived = createAction(
  '[Gym Selection] List of gyms received',
  props<{ gyms: Array<IGym> }>()
);

const selectedGymChanged = createAction(
  '[Gym Selection] Selected gym changed',
  props<{ gym: IGym }>()
);

export const GymSelectionActions = {
  gymsReceived,
  selectedGymChanged
};
