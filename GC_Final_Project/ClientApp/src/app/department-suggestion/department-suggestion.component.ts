import { Departments } from '../models/Departments';
import { DepartmentAPIService } from '../services/department-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-suggestion',
  templateUrl: './department-suggestion.component.html',
  styleUrls: ['./department-suggestion.component.css']
})
export class DepartmentSuggestionComponent implements OnInit {

  // departmentList: Departments[] = [];
  // deparmentSuggestion = ''; //will this be a string or a property?

  // constructor(private departmentService: DepartmentAPIService) { }

   ngOnInit() {
   }

  // //get the list of departments (department name & count) by user
  // getDepartmentListByUser() {
  //   this.departmentService.getDeparmentCountByUser().subscribe(
  //     result => {
  //       this.departmentList = result;
  //       console.log(this.departmentList)
  //     },
  //     error => console.log(error)
  //   )
  // }

  // calculateDepartment () {
  //   //algorithm(s) to calculate which department has the highest count.
  // }




}
