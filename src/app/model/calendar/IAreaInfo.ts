import { IActivityInfo } from "./IActivityInfo";

export interface IAreaInfo {
  id: string;
  name: string;
  activities: Array<IActivityInfo>;
}
