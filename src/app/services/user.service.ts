import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISignInData } from '../model/main-page/ISignInData';
import { IChangePassword } from '../model/user-profile/IChangePassword';
import { IUserProfile } from '../model/user-profile/IUserProfile';

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
    const url: string = `${this.baseUrl}/client/`;

    return this.httpClient.get<IUserProfile>(url);
  }

  putDataToEditUserProfile(userProfile: IUserProfile): Observable<IUserProfile> {
    const url: string = `${this.baseUrl}/client/edit`;

    return this.httpClient.put<IUserProfile>(url, userProfile);
  }

  putDataToEditUserPassword(changePassword: IChangePassword): Observable<IChangePassword> {
    const url: string = `${this.baseUrl}/client/editPassword`;

    return this.httpClient.put<IChangePassword>(url, changePassword);
  }
}
