import { Component } from '@angular/core';
import { httpServices } from './http-crud.service';

@Component({
  selector: 'httpCrud-component',
  standalone: true,
  imports: [],
  templateUrl: './http-crud.component.html',
  styleUrl: './http-crud.component.css'
})
export class HttpCrudComponent {

  contents: any | undefined;

  constructor(private httpCrudServices: httpServices){

    this.getUsers();
  }

  getUsers(){
     this.httpCrudServices.getAllEmployee()
    .subscribe(results => this.contents = results);
    console.log(this.contents);
  }

}
