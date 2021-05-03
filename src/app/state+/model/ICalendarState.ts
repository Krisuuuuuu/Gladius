import { ICalendarData } from "src/app/model/calendar/ICalendarData";
import { IGymInfo } from "src/app/model/calendar/IGymInfo";

export interface ICalendarState {
  isGymInfoReceiving: boolean;
  isCalendarDataReceiving: boolean;
  isNewBookingAdding: boolean;
  gymInfo: IGymInfo;
  currentArea: string;
  currentActivity: string;
  currentTrainer: string;
  calendarData: ICalendarData;
}

export const InitialCalendarState: ICalendarState = {
  isGymInfoReceiving: false,
  isCalendarDataReceiving: false,
  isNewBookingAdding: false,
  gymInfo: {} as IGymInfo,
  currentArea: '',
  currentActivity: '',
  currentTrainer: '',
  calendarData: {} as ICalendarData
};
