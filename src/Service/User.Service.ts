import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL: string = 'https://localhost:7044/academy-api/user/all';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    console.log("ssssss");
    return this.http.get(this.baseURL);
  }

  getUserById(userId: any) {
    return this.http.get(`${this.baseURL}?userId=${userId}`);
  }

  addUser(user: any) {
    return this.http.post(this.baseURL,user);
  }

  deleteUser(userId: any) {
    return this.http.delete(`${this.baseURL}?userId=${userId}`);
  }

  editUser(userId: any, user: any) {
    return this.http.put(`${this.baseURL}/?userId=${userId}`, user);
  }

}
