import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
    baseURL:string='https://localhost:7044/academy-api/group/all';

    constructor(private http:HttpClient) { }

    getAllGroupsAuth(){
      return this.http.get(this.baseURL);
    }
    addnewGroup(data:any){
      return this.http.put(this.baseURL,data);
    }
}

