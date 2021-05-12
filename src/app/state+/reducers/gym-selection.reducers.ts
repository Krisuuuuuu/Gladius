import { Action, createReducer, on } from "@ngrx/store";
import { GymSelectionActions } from "../actions/gym-selection.actions";
import { IGymSelectionState, InitialGymSelectionState } from "../model/IGymSelection";

const reducer = createReducer(
  InitialGymSelectionState,
  on(GymSelectionActions.loadGyms, (state: IGymSelectionState) => {
    return {
      ...state,
      areGymsReceiving: true
    };
  }),
  on(GymSelectionActions.gymsReceived, (state: IGymSelectionState, { gyms }) => {
    return {
      ...state,
      areGymsReceiving: false,
      gyms: gyms,
    };
  }),
  on(GymSelectionActions.loadingGymsFailed, (state: IGymSelectionState) => {
    return {
      ...state,
      areGymsReceiving: false,
    };
  }),
  on(GymSelectionActions.currentGymChanged, (state: IGymSelectionState, { gym }) => {
    return {
      ...state,
      currentGym: gym
    };
  })
)

export function gymSelectionReducer(
  state: IGymSelectionState | undefined,
  action: Action
): IGymSelectionState {
  return reducer(state, action);
};
