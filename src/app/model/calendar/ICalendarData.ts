import { IActivity } from "./IActivity";

export interface ICalendarData {
  id: string;
  gym_name: string;
  week_start_date: string;
  week_end_date: string;
  activities: Array<IActivity>;
}
