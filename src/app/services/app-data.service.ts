import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBooking } from '../model/booking-history/IBooking';
import { IDeleteBooking } from '../model/booking-history/IDeleteBooking';
import { IAddBooking } from '../model/calendar/IAddBooking';
import { ICalendarData } from '../model/calendar/ICalendarData';
import { IGymInfo } from '../model/calendar/IGymInfo';
import { IGym } from '../model/gym-selection/IGym';

const authenticationHeader = {
  headers: new HttpHeaders({
    authorization: ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getGyms(companyName: string): Observable<Array<IGym>> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/gym/${companyName}/gyms/`;

    return this.httpClient.get<Array<IGym>>(url, authenticationHeader);
  }

  getGymInfo(gymId: string): Observable<IGymInfo> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/gym/${gymId}/info/`;

    return this.httpClient.get<IGymInfo>(url, authenticationHeader);
  }

  getActivitiesForWeek(startDate: string, endDate: string): Observable<ICalendarData> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/reservations/${startDate}/${endDate}/`;

    return this.httpClient.get<ICalendarData>(url, authenticationHeader);
  }

  getBookingsHistory(): Observable<Array<IBooking>> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/reservations/history/`;

    return this.httpClient.get<Array<IBooking>>(url, authenticationHeader);
  }

  postDataToAddBooking(booking: IAddBooking): Observable<IAddBooking> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/reservations/add/`;

    return this.httpClient.post<IAddBooking>(url, booking, authenticationHeader);
  }

  postDataToRemoveBooking(booking: IDeleteBooking): Observable<IDeleteBooking> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/reservations/delete/`;

    return this.httpClient.post<IDeleteBooking>(url, booking, authenticationHeader);
  }
}
