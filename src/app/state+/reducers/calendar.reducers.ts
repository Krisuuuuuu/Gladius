import { Action, createReducer, on } from "@ngrx/store";
import { calendarActions } from "../actions/calendar.actions";
import { ICalendarState, InitialCalendarState } from "../model/ICalendarState";

const reducer = createReducer(
  InitialCalendarState,
  on(calendarActions.loadGymInfo, (state: ICalendarState) => {
    return {
      ...state,
      isGymInfoReceiving: true
    };
  }),
  on(calendarActions.gymInfoReceived, (state: ICalendarState, { gymInfo }) => {
    return {
      ...state,
      isGymInfoReceiving: false,
      gymInfo: gymInfo
    };
  }),
  on(calendarActions.loadCalendarData, (state: ICalendarState) => {
    return {
      ...state,
      isCalendarDataReceiving: true
    };
  }),
  on(calendarActions.calendarDataReceived, (state: ICalendarState, { calendarData }) => {
    return {
      ...state,
      isCalendarDataReceiving: false,
      calendarData: calendarData
    };
  }),
  on(calendarActions.newActivityBooked, (state: ICalendarState) => {
    return {
      ...state,
      isNewBookingAdding: true
    };
  }),
  on(calendarActions.newActivityBookedSuccess, (state: ICalendarState) => {
    return {
      ...state,
      isNewBookingAdding: false
    };
  }),
  on(calendarActions.currentAreaChanged, (state: ICalendarState, { areaName }) => {
    return {
      ...state,
      currentArea: areaName
    };
  }),
  on(calendarActions.currentActivityChanged, (state: ICalendarState, { activityName }) => {
    return {
      ...state,
      currentActivity: activityName
    };
  }),
  on(calendarActions.currentTrainerChanged, (state: ICalendarState, { trainerName }) => {
    return {
      ...state,
      currentTrainer: trainerName
    };
  }),
);

export function bookingHistoryReducer(
  state: ICalendarState | undefined,
  action: Action
): ICalendarState {
  return reducer(state, action);
}
