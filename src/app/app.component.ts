import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'angular';
  clickMessage ='';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  getData() {
    this.http.get('http://localhost:8080/employee', {responseType: 'text'})
      .subscribe(data => {
        console.log(data);
        this.clickMessage = data;
      });
  }

}
