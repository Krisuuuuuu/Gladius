import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

export interface ICalendarState {
  isGymInfoAdding: boolean;
  isCalendarDataAdding: boolean;
  gymInfo: IGymInfo | null;
  currentArea: string;
  currentActivity: string;
  currentTrainer: string;
  calendarData: ICalendarData | null;
}

export const InitialCalendarState: ICalendarState = {
  isGymInfoAdding: false,
  isCalendarDataAdding: false,
  gymInfo: null,
  currentArea: '',
  currentActivity: '',
  currentTrainer: '',
  calendarData: null
};
