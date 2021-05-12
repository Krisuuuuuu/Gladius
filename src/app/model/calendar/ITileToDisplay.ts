import { IActivity } from "./IActivity";

export interface ITileToDisplay {
  hour: string;
  activities: Array<IActivity>;
}
