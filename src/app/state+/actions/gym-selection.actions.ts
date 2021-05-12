import { createAction, props } from "@ngrx/store";
import { IGym } from "src/app/model/gym-selection/IGym";

const loadGyms = createAction(
  '[Gym Selection] Load gyms',
  props<{ companyName: string }>()
);

const gymsReceived = createAction(
  '[Gym Selection] List of gyms received',
  props<{ gyms: Array<IGym> }>()
);

const loadingGymsFailed = createAction(
  '[Gym Selection] Loading list of gyms failed'
);

const currentGymChanged = createAction(
  '[Gym Selection] Current gym changed',
  props<{ gym: IGym }>()
);

export const GymSelectionActions = {
  loadGyms,
  gymsReceived,
  loadingGymsFailed,
  currentGymChanged
};
