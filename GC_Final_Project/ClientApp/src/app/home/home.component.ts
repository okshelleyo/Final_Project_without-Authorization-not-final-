import { MetObjects } from './../models/MetObjects';
import { ListBySearchTerm } from './../models/ListBySearchTerm';
import { Component } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { MetAPIService } from '../services/met-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  // listBySearchTerm: ListBySearchTerm;

  // searchTermArray: string[] = [
  //   "painting", "ceramic","sculpture", "printing",  "costume", "drawings",
  //   "photograph", "textile", "furniture", "jewelery"
  // ];
  // userSearchSelection: string = '';
  // display = false;

  constructor(private metAPIservice: MetAPIService) {}


  ngOnInit() { }

  //  //when the user selects a searchterm from the drop down, this method assigns the value to property userSearchSelection
  //  //then sets that value as a parameter in the function to find the list of ojects from the search term (below)
  //  submitSearchTerm(e: any) {
  //   this.display = true;
  //   this.userSearchSelection = e.target.value;
  //   console.log(this.userSearchSelection);
  //   this.getObjListBySearchTerm(this.userSearchSelection); //assigns ListBySearchTerm values (a list of objects that meet that searchterm)

  // }



  // //accesses the API to return a list of object IDs (number array) (model: listBySearchTerm)
  // getObjListBySearchTerm(searchTerm: string) {
  //   console.log("gtting to getobjlistbysearchterm")
  //   console.log(`i used ${searchTerm}`);
  //   this.metAPIservice.getObjectListBySearchTerm(searchTerm).subscribe(
  //      result => {
  //        this.listBySearchTerm = result;
  //        console.log(this.listBySearchTerm.objectIDs);
  //      },
  //      error => console.log(error)
  //   );
   //}



}
