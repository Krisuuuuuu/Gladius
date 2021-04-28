import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";
import { ICalendarState } from "../model/ICalendarState";

const selectCalendarState = createFeatureSelector<ICalendarState>(
  'calendar'
);

const selectGymInfo = createSelector(
  selectCalendarState,
  (state: ICalendarState) => state.gymInfo
);

const selectCurrentArea = createSelector(
  selectCalendarState,
  (state: ICalendarState) => state.currentArea
);

const selectCurrentActivity = createSelector(
  selectCalendarState,
  (state: ICalendarState) => state.currentActivity
);

const selectCurrentTrainer = createSelector(
  selectCalendarState,
  (state: ICalendarState) => state.currentTrainer
);

const selectCalendarData = createSelector(
  selectCalendarState,
  (state: ICalendarState) => state.calendarData
);

export const CalendarSelectors = {
  selectGymInfo,
  selectCurrentArea,
  selectCurrentActivity,
  selectCurrentTrainer,
  selectCalendarData
}
