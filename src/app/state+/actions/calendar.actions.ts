import { createAction, props } from "@ngrx/store";
import { IAddBooking } from "src/app/model/calendar/IAddBooking";
import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

const gymInfoReceived = createAction(
  '[Calendar] Gym info received',
  props<{ gymInfo: IGymInfo }>()
);

const calendarDataReceived = createAction(
  '[Calendar] Calendar data received',
  props<{ calendarData: ICalendarData }>()
)

const selectedAreaChanged = createAction(
  '[Calendar] Selected area changed',
  props<{ areaName: string }>()
);

const selectedActivityChanged = createAction(
  '[Calendar] Selected activity changed',
  props<{ activityName: string }>()
);

const selectedTrainerChanged = createAction(
  '[Calendar] Selected trainer changed',
  props<{ trainerName: string }>()
);

const allPreferencesReset = createAction(
  '[Calendar] All preferences reset'
);

const newActivityBooked = createAction(
  '[Calendar] New activity booked',
  props<{ booking: IAddBooking }>()
);

export const calendarActions = {
  gymInfoReceived,
  calendarDataReceived,
  selectedAreaChanged,
  selectedActivityChanged,
  selectedTrainerChanged,
  allPreferencesReset,
  newActivityBooked
}
