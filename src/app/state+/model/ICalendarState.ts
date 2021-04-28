import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

export interface ICalendarState {
  gymInfo: IGymInfo;
  currentArea: string;
  currentActivity: string;
  currentTrainer: string;
  calendarData: ICalendarData;
}
