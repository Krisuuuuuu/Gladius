import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISignInData } from '../model/main-page/ISignInData';
import { IChangePassword } from '../model/user-profile/IChangePassword';
import { IUserProfile } from '../model/user-profile/IUserProfile';

const authenticationHeader = {
  headers: new HttpHeaders({
    authorization: ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  postDataToSignIn(signInData: ISignInData): Observable<string> {
    const url: string = `${this.baseUrl}/client/login/`;

    return this.httpClient.post<string>(url, signInData);
  }

  getUserProfile(): Observable<IUserProfile> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/client/`;

    return this.httpClient.get<IUserProfile>(url, authenticationHeader);
  }

  putDataToEditUserProfile(userProfile: IUserProfile): Observable<IUserProfile> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/client/edit`;

    return this.httpClient.put<IUserProfile>(url, userProfile);
  }

  putDataToEditUserPassword(changePassword: IChangePassword): Observable<IChangePassword> {
    authenticationHeader.headers = authenticationHeader.headers.set('Authorization', 'Token ' + localStorage.getItem('token'));
    const url: string = `${this.baseUrl}/client/editPassword`;

    return this.httpClient.put<IChangePassword>(url, changePassword);
  }
}
