import { IAreaInfo } from "./IAreaInfo";

export interface IGymInfo {
  id: string;
  name: string;
  areas: Array<IAreaInfo>;
}
