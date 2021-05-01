import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

export interface ICalendarState {
  isGymInfoReceiving: boolean;
  isCalendarDataReceiving: boolean;
  isNewBookingAdding: boolean;
  gymInfo: IGymInfo | null;
  currentArea: string;
  currentActivity: string;
  currentTrainer: string;
  calendarData: ICalendarData | null;
}

export const InitialCalendarState: ICalendarState = {
  isGymInfoReceiving: false,
  isCalendarDataReceiving: false,
  isNewBookingAdding: false,
  gymInfo: null,
  currentArea: '',
  currentActivity: '',
  currentTrainer: '',
  calendarData: null
};
