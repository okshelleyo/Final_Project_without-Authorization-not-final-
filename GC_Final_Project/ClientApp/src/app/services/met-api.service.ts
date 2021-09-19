import { ListBySearchTerm } from '../models/ListBySearchTerm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MetObjects } from '../models/MetObjects';

@Injectable({
  providedIn: 'root'
})
export class MetAPIService {

  apiUri: string ="https://localhost:44375/api/met"; //base URL needed

  constructor(private http: HttpClient) { }

   // READ get the list of objects by medium
   getObjectListBySearchTerm(searchTerm: string) {
    return this.http.get<ListBySearchTerm>(`${this.apiUri}/GetObjByMedium/${searchTerm}`)
   }

  //READ get the object details by Id
  getObjectById(objectId: number) {
   return this.http.get<MetObjects>(`${this.apiUri}/getObjById/${objectId}`);
  }

}
