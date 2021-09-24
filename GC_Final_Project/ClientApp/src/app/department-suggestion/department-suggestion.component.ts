import { Departments } from '../models/Departments';
import { DepartmentAPIService } from '../services/department-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-suggestion',
  templateUrl: './department-suggestion.component.html',
  styleUrls: ['./department-suggestion.component.css']
})
export class DepartmentSuggestionComponent implements OnInit {

  mapObj = new Map ()

  constructor() { }

  ngOnInit() {
    
   }



  calculateDepartment () {


    //algorithm(s) to calculate which department has the highest count.

  }

  mostfrequent(array: string[]) {

    let map = this.mapObj;

    let compare: number = 0;
    let mostFreq : string = '';

    for (var i = 0; i < array.length; i++) { //for item in the array
      var word = array[i];  //set variable word equal to the first item in the arary (tom)
      var x: number = 1;

      //map.set(word, x)

       if (map.get(word) == null ) { //if the word doesn't exist
         map.set(word, x); // add it to the object mapObj
       } else {
         var j = map.get(word);
         var j = j + 1
         map.set(word, j) // else increment the value by 1
       }

       if (map.get(word) > compare) {
        compare = map.get(word);
        mostFreq = array[i];
       }

    }

    return mostFreq;

  }




}
