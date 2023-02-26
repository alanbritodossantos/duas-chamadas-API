import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(`${this.apiUrl}/?results=10`);
  }

  getUser(uuid: string) {
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`);
  }
}
