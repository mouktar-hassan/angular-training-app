import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class httpServices {
  constructor(private http: HttpClient) { }

  getAllEmployee(){
    const url = 'http://localhost:8080/api/users/';
    return this.http.get(url, {responseType: 'json'})
    .pipe(
        tap( //log the result or error
        {
            next: (data) => this.log(url, data),
            error: (error) => this.logError(url, error)
        }
        )
    )
  }

  getOneEmployee(id: number){
    const url = `http://localhost:8080/api/users/${id}`;
    return this.http.get(url, {responseType: 'json'})
    .pipe(
        tap( //log the result or error
        {
            next: (data) => this.log(url, data),
            error: (error) => this.logError(url, error)
        }
        )
    )
  }

  addEmployee(employee : any){

  }

  updateEmployee(id: number){

  }

  deleteEmployee(id: number){

  }

  private log(url: string, data: any) {
    const message = `Récupération des employés à travers l'url : "${url}", voici les données reçues : ${JSON.stringify(data)}`;
    console.log(message);
}


  private logError(url: string, error:any){
    const message = `Erreur de récupération lors de tentative de l\'url : "${url}"; causé par "${error.message}".`;
    console.error(message);
  }
}