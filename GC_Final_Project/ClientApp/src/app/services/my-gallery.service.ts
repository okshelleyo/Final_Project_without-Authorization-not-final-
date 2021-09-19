import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyGallery } from '../models/MyGallery';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {

   //Shelley start

   apiUri: string =""; //base URL needed

   constructor(private http: HttpClient) { }

   //NOTES: need to add in endpoints, not tested

   // READ get the list of likes by user
   getGalleryByUser (visitorId: string) {
     return this.http.get<MyGallery[]>(`${this.apiUri}/{}`);

   }// CREATE add an object to myGallery
   addToMyGallery (objectId: number, visitorId: string) {
     return this.http.post<MyGallery>(`${this.apiUri}/{}/{}`, {"objectId": objectId, "visitorId": visitorId});
   }

   // UPDATE edit an object that the user likes (Have visited boolean)
   updateGalleryItem (objectId: number, item: MyGallery, visitorId: string) {
     return this.http.put<MyGallery>(`${this.apiUri}/{}/{}`, {});
   }

   // DELETE delete an item from the list of user likes
   deleteGalleryItem (objectId: number, visitorId: string) {
     return this.http.delete(`${this.apiUri}/{}/{}`);
   }


  // Shelley end

  //}

}
