import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'AuthTest',
  templateUrl: './AuthTest.component.html',
  styleUrls: ['./AuthTest.component.css']
})
/** demo component*/
export class AuthTestComponent {
  demoData: any = { name: '', id: '' };
  /** demo ctor */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'demo').subscribe(result => {
      this.demoData = result;
      console.log(result);
    }, error => console.error(error));
  }
}