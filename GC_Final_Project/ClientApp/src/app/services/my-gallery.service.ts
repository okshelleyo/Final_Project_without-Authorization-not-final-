import { MetObjects } from './../models/MetObjects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyGallery } from '../models/MyGallery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGalleryService {


   apiUri: string ="https://localhost:44375/api/likes"; //base URL needed

   constructor(private http: HttpClient) { }


   // READ get the list of likes by user
   getAllLikes() {
     return this.http.get<MyGallery[]>(`${this.apiUri}/getlikes`);
    }


     // CREATE add an object to myGallery
    addToMyGallery (metObj: MetObjects) {
      return this.http.post<MyGallery>(`${this.apiUri}/newlike`, {"objectId":metObj.objectID, "department":metObj.department, "title":metObj.title,
                                      "artistDisplayName":metObj.artistDisplayName, "primaryImage":metObj.primaryImage, "artistDisplayBio":metObj.artistDisplayBio,
                                      "medium":metObj.medium, "objectDate":metObj.objectDate});
    }

    //** SO/AC
    // UPDATE edit an object that the user likes (Have visited boolean)
    updateGalleryItem (entryId: number, galleryItem: MyGallery) {
      return this.http.put<MyGallery[]>(`${this.apiUri}/updatelike/${entryId}`, {"objectId":galleryItem.objectId, "department":galleryItem.department, "title":galleryItem.title,
      "artistDisplayName":galleryItem.artistDisplayName, "primaryImage":galleryItem.primaryImage, "artistDisplayBio":galleryItem.artistDisplayBio,
      "medium":galleryItem.medium, "objectDate":galleryItem.objectDate, "visitedObject":galleryItem.visitedObject});
    }

    // DELETE delete an item from the list of user likes
    deleteGalleryItem (entryId: number) {
      return this.http.delete(`${this.apiUri}/delete/${entryId}`);
    }


  //}

}
