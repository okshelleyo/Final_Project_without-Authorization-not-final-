import { MetObjects } from './../models/MetObjects';
import { MetAPIService } from './../services/met-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { ListBySearchTerm } from '../models/ListBySearchTerm';
import { MyGalleryService } from '../services/my-gallery.service';

@Component({
  selector: 'app-met-app',
  templateUrl: './met-app.component.html',
  styleUrls: ['./met-app.component.css']
})
export class MetAppComponent implements OnInit {

  metObj: MetObjects;
  listBySearchTerm: ListBySearchTerm;
  userSearchSelection: string = '';
  searchArray: number [] = [];
  searchTermArray: string[] = [
       "Paintings", "Ceramics", "Sculpture",
       "Furniture"
     ];
  randomValue: number;


  constructor(private metAPIservice: MetAPIService, private myGalleryAPIservice: MyGalleryService) { }

    // On start, the app shows this pre-selected object. Can work out a better system later.
    ngOnInit() {
      console.log("made it to the app component")
      this.getMetObjById(436529);
   }

    //when the user selects a searchterm from the drop down, this method assigns the value to property userSearchSelection
    //then, that value is sent as a parameter to getObjListBySearchTerm, which assigns values to a property called listBySearchTerm
    submitSearchTerm(e: any) {
      this.userSearchSelection = e.target.value;
        console.log(this.userSearchSelection);
      this.getObjListBySearchTerm(this.userSearchSelection); //assigns ListBySearchTerm values (a list of objects that meet that searchterm)
        console.log("end of submitSearchTerm method")

    }

    //accesses the 3rd party API to assign the values the listBySearchTerm object
    getObjListBySearchTerm(searchTerm: string) {
        console.log("beginning of getObjListBySearchterm")
        console.log(`term: ${searchTerm}`);
      this.metAPIservice.getObjectListBySearchTerm(searchTerm).subscribe(
         result => {
           this.listBySearchTerm = result;
           console.log(this.listBySearchTerm.objectIDs);
           console.log("end of getObjListBySearchterm")
         },
         error => console.log(error)
      )};

   //this method returns a random number from a number array. It gets a random index from the array
   //then assigns the value at that index to property randomValue.
   //improvement needed: make sure the random number doesn't repeat
   getRandomValue(array: number[]) :number {
      console.log("beginning of getObjListBySearchterm getRandomValue")
      var randIndex = Math.floor(Math.random() * array.length)
       console.log(randIndex);
      this.randomValue = array[randIndex];
       console.log(this.randomValue);
      return this.randomValue;
    }

   //accesses the 3rd party API to assign values to the MetObject object
   getMetObjById(objectId: number) {
     this.metAPIservice.getObjectById(objectId).subscribe(
       result => {
         this.metObj = result;
         console.log(this.metObj);
       },
       error => console.log(error)
      )};



   //method to call create a new favorite & add it to thelikes/mygallery
   addNewLike() {

   }

   //Refers to the Select button, which is clicked after a search term is selected.
   //This sets a local variable rand equal to the random value that is returned from getRandomValue
   //then sends rand to getMetObjById to display the metObject
    onSelect() {
      var rand = this.getRandomValue(this.listBySearchTerm.objectIDs);
      this.getMetObjById(rand);
    }

    //same as onSelect, but when the user selects "like"
    //***Required functionality: add the metObject to the MyGallery using the TheLike add function****
    onLike() {
      var rand = this.getRandomValue(this.listBySearchTerm.objectIDs);
      this.getMetObjById(rand);
    }

    //same as onSelect, but when the user selects "dislike"
    //nothing else happens per MVP goals
    onDislike() {
      var testvalue = this.getRandomValue(this.listBySearchTerm.objectIDs);
      this.getMetObjById(testvalue);
    }

}
