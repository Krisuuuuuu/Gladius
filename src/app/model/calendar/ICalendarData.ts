import { IActivity } from "./IActivity";
import { IDateToDisplay } from "./IDateToDisplay";

export interface ICalendarData {
  id: string;
  gym_name: string;
  display_dates: Array<IDateToDisplay>;
  activities: Array<IActivity>;
}
