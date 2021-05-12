import { createAction, props } from "@ngrx/store";
import { IAddBooking } from "src/app/model/calendar/IAddBooking";
import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

const loadGymInfo = createAction(
  '[Calendar] Load gym info',
  props<{ id: string }>()
);

const gymInfoReceived = createAction(
  '[Calendar] Gym info received',
  props<{ gymInfo: IGymInfo }>()
);

const loadingGymInfoFailed = createAction(
  '[Calendar] Loading gym info failed'
);

const loadCalendarData = createAction(
  '[Calendar] Load calendar data',
  props<{
    startDate: string,
    endDate: string
   }>()
);

const calendarDataReceived = createAction(
  '[Calendar] Calendar data received',
  props<{ calendarData: ICalendarData }>()
);

const loadingCalendarDataFailed = createAction(
  '[Calendar] Loading calendar data failed',
);

const currentAreaChanged = createAction(
  '[Calendar] Current area changed',
  props<{ areaName: string }>()
);

const currentActivityChanged = createAction(
  '[Calendar] Current activity changed',
  props<{ activityName: string }>()
);

const currentTrainerChanged = createAction(
  '[Calendar] Current trainer changed',
  props<{ trainerName: string }>()
);

const allPreferencesReset = createAction(
  '[Calendar] All preferences reset'
);

const newActivityBooked = createAction(
  '[Calendar] New activity booked',
  props<{ booking: IAddBooking }>()
);

const newActivityBookedSuccess = createAction(
  '[Calendar] New activity booked successfully',
);

const bookingNewActivityFailed = createAction(
  '[Calendar] Booking of new activity failed',
);

export const calendarActions = {
  loadGymInfo,
  gymInfoReceived,
  loadingGymInfoFailed,
  loadCalendarData,
  calendarDataReceived,
  loadingCalendarDataFailed,
  currentAreaChanged,
  currentActivityChanged,
  currentTrainerChanged,
  allPreferencesReset,
  newActivityBooked,
  newActivityBookedSuccess,
  bookingNewActivityFailed
}
