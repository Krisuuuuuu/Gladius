import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

export interface ICalendarState {
  gymInfo: IGymInfo;
  selectedArea: string;
  selectedActivity: string;
  selectedClasses: string;
  calendarData: ICalendarData;
}
