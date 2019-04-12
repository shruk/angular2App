import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //directive that will be used in html as a tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string ='my-app';
  pageTitle :string = 'Student Management System';
}
