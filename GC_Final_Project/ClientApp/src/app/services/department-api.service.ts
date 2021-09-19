import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departments } from '../models/Departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentAPIService {

  // apiUri: string =""; //base URL needed

  // constructor(private http: HttpClient) { }

  // //NOTES: need to add in endpoint, not tested

  // // READ get the list of likes by user
  // getDeparmentCountByUser (visitorId: string) {
  //   return this.http.get<Departments[]>(`${this.apiUri}/{}`);
  // }
}
