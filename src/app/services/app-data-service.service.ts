import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBooking } from '../model/booking-history/IBooking';
import { IDeleteBooking } from '../model/booking-history/IDeleteBooking';
import { ICalendarData } from '../model/calendar/ICalendarData';
import { IGymInfo } from '../model/calendar/IGymInfo';
import { IGym } from '../model/gym-selection/IGym';

@Injectable({
  providedIn: 'root'
})
export class AppDataServiceService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getGyms(companyName: string): Observable<Array<IGym>> {
    const url: string = `${this.baseUrl}/gym/${companyName}/gyms/`;

    return this.httpClient.get<Array<IGym>>(url);
  }

  getGymInfo(gymId: string): Observable<IGymInfo> {
    const url: string = `${this.baseUrl}/${gymId}/info/`;

    return this.httpClient.get<IGymInfo>(url);
  }

  getActivitiesForWeek(startDate: string): Observable<ICalendarData> {
    const url: string = `${this.baseUrl}/reservation/availableThisWeek/${startDate}`;

    return this.httpClient.get<ICalendarData>(url);
  }

  getBookingsHistory(email: string): Observable<Array<IBooking>> {
    const url: string = `${this.baseUrl}/reservation/${email}/history/`;

    return this.httpClient.get<Array<IBooking>>(url);
  }

  postDataToAddBooking(booking: IBooking): Observable<IBooking> {
    const url: string = `${this.baseUrl}/reservation/add/`;

    return this.httpClient.post<IBooking>(url, booking);
  }

  postDataToRemoveBooking(booking: IDeleteBooking): Observable<IDeleteBooking> {
    const url: string = `${this.baseUrl}/reservation/delete/`;

    return this.httpClient.post<IDeleteBooking>(url, booking);
  }
}
