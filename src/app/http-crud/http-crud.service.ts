import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class httpServices {
  constructor(private http: HttpClient) { }

  getAllEmployee(){
    const url = 'localhost:8080/api/users/';
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

  private log(url: string, data:string| any){
    const message = `Récupération des employés à travers l\'url : "${url}", voici les données réçus "${data}".`;
    console.log(message);
  }

  private logError(url: string, error:any){
    const message = `Erreur de récupération lors de tentative de l\'url : "${url}"; causé par "${error.message}".`;
    console.error(message);
  }
}