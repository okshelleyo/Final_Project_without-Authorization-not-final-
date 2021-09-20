import { MetObjects } from './../models/MetObjects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyGallery } from '../models/MyGallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {

   //Shelley start

   apiUri: string ="https://localhost:44375/api/likes"; //base URL needed

   constructor(private http: HttpClient) { }


   // READ get the list of likes by user
   getAllLikes() {
     return this.http.get<MyGallery[]>(`${this.apiUri}/getlikes`);
    }


  //   // CREATE add an object to myGallery
  //  addToMyGallery (metObj: MetObjects) {
  //    return this.http.post<MyGallery>(`${this.apiUri}/newlike`, {"metObj": metObj});
  //    //return this.http.post<MyGallery>(`${this.apiUri}/{newlike}/{}`, {"objectId": objectId, "visitorId": visitorId});
  //  }

  //  // UPDATE edit an object that the user likes (Have visited boolean)
  //  updateGalleryItem (objectId: number, item: MyGallery, visitorId: string) {
  //    return this.http.put<MyGallery>(`${this.apiUri}/{}/{}`, {});
  //  }

  //  // DELETE delete an item from the list of user likes
  //  deleteGalleryItem (objectId: number, visitorId: string) {
  //    return this.http.delete(`${this.apiUri}/{}/{}`);
  //  }


  // Shelley end

  //}

}
