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

  constructor(private metAPIservice: MetAPIService) {}

  ngOnInit() { }

}