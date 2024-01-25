import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class httpServices {

  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { } 

  getAllUsers() : Observable<any>{
    return this.http.get(this.apiUrl +'users/');
  }

  deleteUser(userId:number) : Observable<any>{
    return this.http.delete(this.apiUrl + `users/${userId}`);
  }

  addUser(user: User): Observable<any> {
    // Créez une instance de HttpHeaders avec les en-têtes requis
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json', // Spécifiez le type de contenu de votre requête
      //'Authorization': 'Bearer ' + yourAuthToken, // Ajoutez l'en-tête d'autorisation si nécessaire
    });
  
    // Utilisez les en-têtes personnalisés dans votre requête POST
    return this.http.post(this.apiUrl + 'users/', user, { headers: httpHeaders });
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